import axios, { AxiosResponse, AxiosError } from "axios";
import { Mint } from "../types";

export async function createCNFTMint(
  data: Mint,
  apikey: string,
  cnft_url: string
): Promise<String[]> {
  const {
    username,
    api_key,
    recipient,
    collection_id,
    nftName,
    nftImagePermalink,
    nftCID,
    nftDescription,
    nftTraits,
    nftSymbol,
  } = data;
  try {
    console.log(data)
    const response: AxiosResponse = await axios.post(
      `${cnft_url}/cnft/mint/create`,
      data,
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
