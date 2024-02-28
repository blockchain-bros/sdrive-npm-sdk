import axios, { AxiosResponse, AxiosError } from "axios";
import { Meta } from "../types";


export async function uploadMeta(
  data: Meta,
  apikey: string,
  cnft_url: string
): Promise<String[]> {
  const {
    nftImagePermalink,
    nftDescription,
    nftName,
    fee,
    nftTraits,
    imageType,
    nftSymbol
  } = data;
  if(!nftImagePermalink) throw "Missing NFT Image";
  if(!nftDescription) throw "Missing NFT Description";
  if(!nftName) throw "Missing NFT Name";
  if(!nftTraits) throw "Missing NFT Traits";
  console.log(data)
  try {
    const response: AxiosResponse = await axios.post(
      `${cnft_url}/cnft/meta/upload`,
      {
        ...data,
        fee: data.fee||0,
        imageType: data.imageType||"image/png",
        nftSymbol: data.nftSymbol||""
      },
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
