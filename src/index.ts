import axios, { AxiosResponse, AxiosError } from "axios";
import FormData from "form-data";
import mime from "mime";
import path from "path";
import process from "process";
import fs from "fs";

export class SDrive {
  apikey: string;
  base_url: string;
  network: "arweave"|"shdwdrive"

  constructor(apikey: string, network:"arweave"|"shdwdrive" = "arweave") {
    this.apikey = apikey;
    this.network = network;
    this.base_url = process.env.base_url || "https://v3.sdrive.app";

    if (!this.apikey) {
      console.log("Please add your credentials");
      process.exit();
    }
  }

  async listObjects(): Promise<String[]> {
    try {
      const response: AxiosResponse = await axios.post(
        `${this.base_url}/list-objects`,
        { apikey: this.apikey },
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

  async upload(buffer: Buffer, filename: string): Promise<any> {
    let formData = new FormData();
    let mimetype = mime.getType(path.extname(filename)) || undefined; // Use undefined if null

    formData.append("fileupload", buffer, {
      filename: filename,
      contentType: mimetype,
    });
    formData.append("apikey", this.apikey);
    formData.append("network", this.network);

    try {
      const response: AxiosResponse = await axios.post(
        `${this.base_url}/upload`,
        formData,
        {
          headers: formData.getHeaders(),
        },
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
