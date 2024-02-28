import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
const { username, pubkey, recipient } = process.env;

const collection_id = "zwx1fzdondnphdmcqwl9rcgt";
const nftName = "My NFT";
const nftImagePermalink =
  "https://arweave.net/zp8VxsUcg7x63L9JIhfBkNvHoQrJo2fylZNzjYcRC-4";
const nftCID = "QmYCrsMpbGKUWuDa5FVXf8c42X1fzkq3impg7U6NKCnCjL";
const nftDescription = "Another NFT in my series of NFTS";
const nftTraits = [
  {
    trait_type: "Background",
    value: "Skull cavern",
  },
];
const nftSymbol = "NFT";

const data = {
  collection_id,
  nftName,
  nftImagePermalink,
  nftCID,
  nftDescription,
  nftTraits,
  nftSymbol,
  recipient,
};
await sdrive
  .createMint(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Collection creation failed:", error?.message);
  });
