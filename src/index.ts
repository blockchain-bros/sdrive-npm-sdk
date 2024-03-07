import axios, { AxiosResponse, AxiosError } from "axios";
import FormData from "form-data";
import mime from "mime";
import path from "path";
import process from "process";
import fs from "fs";
import { Collection, MediaMetadata, Meta, Mint, Networks } from "./types";
import {
  createCNFTCollection,
  listCNFTCollections,
} from "./cnft/create_collection.js";
import { createCNFTMint } from "./cnft/create_mint.js";
import { uploadMeta } from "./cnft/upload_meta.js";

export class SDrive {
  apikey: string;
  base_url: string;
  cnft_url: string;
  network: Networks;
  limit: number;
  page: number;
  generatePreview: boolean = false;

  constructor(
    apikey: string,
    network: Networks = "arweave",
    page = 1,
    limit = 10,
    generatePreview: boolean = false
  ) {
    this.apikey = apikey;
    this.network = network;
    this.base_url = process.env.base_url || "https://v3.sdrive.app";
    this.cnft_url = process.env.cnft_url || "https://ws.sdrive.app/minter";
    this.page = page;
    this.limit = limit;
    this.generatePreview = generatePreview;

    if (!this.apikey) {
      console.log("Please add your credentials");
      process.exit();
    }
  }

  async listObjects(): Promise<String[]> {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.base_url}/list-objects`,
        { page: this.page, limit: this.limit },
        {
          headers: {
            Authorization: `Bearer ${this.apikey}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      // Explicitly state that error can be of any type
      if ((error as AxiosError).response) {
        // Type-check error before accessing properties
        const errorInfo = {
          status: (error as AxiosError).response!.status,
          statusText: (error as AxiosError).response!.statusText,
          data: (error as AxiosError).response!.data,
        };
        throw new Error(JSON.stringify(errorInfo));
      } else {
        throw error;
      }
    }
  }

  async createCollection(data: Collection): Promise<any> {
    const size = data.size;
    if (!["1024", "16384", "65536", "262144", "1048576"].includes(size)) {
      throw "Wrong collection size. Must be one of 1024,16384,65536,1048576";
    }
    const response = await createCNFTCollection(
      data,
      this.apikey,
      this.cnft_url
    );
    console.log({response});
  }

  async listCollections(): Promise<any> {
    return await listCNFTCollections(this.apikey, this.cnft_url);
  }

  async createMint(data: Mint): Promise<any> {
    return await createCNFTMint(data, this.apikey, this.cnft_url);
  }

  async uploadNFTMeta(data: Meta): Promise<any> {
    return await uploadMeta(data, this.apikey, this.cnft_url);
  }

  async upload(
    filepathOrBuffer: string | Buffer,
    filename: string,
    metadata?: MediaMetadata
  ): Promise<any> {
    let formData = new FormData();
    let mimetype = mime.getType(path.extname(filename)) || undefined; // Use undefined if null
    if ("string" === typeof filepathOrBuffer) {
      let fileStream = fs.createReadStream(filepathOrBuffer);
      formData.append("fileupload", fileStream, {
        filename: filename,
        contentType: mimetype,
      });
    } else {
      formData.append("fileupload", filepathOrBuffer, {
        filename: filename,
        contentType: mimetype,
      });
    }
    formData.append("apikey", this.apikey);
    formData.append("metadata", JSON.stringify(metadata || []));
    formData.append("network", this.network);
    formData.append("generatePreview", this.generatePreview.toString());

    try {
      const response: AxiosResponse = await axios.post(
        `${this.base_url}/upload`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            "x-filename": filename
          },
          maxBodyLength: Infinity,
      
        }
      );
      return response.data;
    } catch (error: any) {
      // Explicitly state that error can be of any type
      if ((error as AxiosError).response) {
        // Type-check error before accessing properties
        const errorInfo = {
          status: (error as AxiosError).response!.status,
          statusText: (error as AxiosError).response!.statusText,
          data: (error as AxiosError).response!.data,
        };
        throw new Error(JSON.stringify(errorInfo));
      } else {
        throw error;
      }
    }
  }
}
