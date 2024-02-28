import axios, { AxiosResponse, AxiosError } from "axios";
import { Mint } from "../types";

export async function createCNFTMint(
  data: Mint,
  apikey: string,
  cnft_url: string
): Promise<String[]> {
  const {
    recipient,
    collection_id,
    name,
    permalink,
    cid,
    description,
    traits,
    symbol,
  } = data;
  if(!recipient) throw "Missing recipient";
  if(!collection_id) throw "Missing collection_id";
  if(!permalink) throw "Missing nftImagePermalink";
  if(!description) throw "Missing nftDescription";
  if(!cid) throw "Missing nftImageCID";
  if(!name) throw "Missing nftName";
  if(!traits) throw "Missing nftTraits";

  try {
    const response: AxiosResponse = await axios.post(
      `${cnft_url}/cnft/mint/create`,
      {
        recipient,
        collection_id,
        nftName:name,
        nftImagePermalink:permalink,
        nftImageCID:cid,
        nftDescription:description,
        nftTraits:traits,
        nftSymbol:symbol,
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
