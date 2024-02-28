import axios, { AxiosResponse, AxiosError } from 'axios';
import FormData from 'form-data';
import mime from 'mime';
import path from 'path';
import process from 'process';
import fs from "fs";

class SDrive {
  apikey: string;
  base_url: string;

  constructor(apikey: string) {
    this.apikey = apikey;
    this.base_url = process.env.base_url || "https://sdrive.app/api/v3";

    if (!this.apikey) {
      console.log("Please add your credentials");
      process.exit();
    }
  }

  async getBuffer(filePath: string): Promise<Buffer> {
    const buffer = await fs.promises.readFile(filePath);
    return buffer;
  }

  async uploadFile(buffer: any, filename: string): Promise<any> {
    let formData = new FormData();
    let mimetype = mime.getType(path.extname(filename)) || undefined;  // Use undefined if null

    formData.append("fileupload", buffer, {
      filename: filename,
      contentType: mimetype,
    });
    formData.append("apikey", this.apikey);

    try {
      const response: AxiosResponse = await axios.post(`${this.base_url}/upload`, formData, {
        headers: formData.getHeaders(),
      });
      return response.data;
    } catch (error: any) { // Explicitly state that error can be of any type
      if ((error as AxiosError).response) { // Type-check error before accessing properties
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

export default SDrive;
