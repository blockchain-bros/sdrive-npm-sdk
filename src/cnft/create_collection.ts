import axios, { AxiosResponse, AxiosError } from "axios";
import { Collection } from "../types";

export async function listCNFTCollections(apikey: string, cnft_url: string) {
  try {
    const response: AxiosResponse = await axios.post(
      `${cnft_url}/cnft/collection/list`,
      {},
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
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

export async function createCNFTCollection(
  data: Omit<Collection, "api-key">,
  apikey: string,
  cnft_url: string
): Promise<String[]> {
  try {
    console.log("before sending");
    const response: AxiosResponse = await axios.post(
      `${cnft_url}/cnft/collection/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
        },
      }
    );
    console.log("after sending",response.status);
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
