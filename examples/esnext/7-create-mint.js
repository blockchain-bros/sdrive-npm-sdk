import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
const { username, pubkey, recipient } = process.env;

const collection_id = "j58wgkn5hwls4g6mkpbx26i3";
const name = "My NFT";
const permalink =
  "https://arweave.net/zp8VxsUcg7x63L9JIhfBkNvHoQrJo2fylZNzjYcRC-4";
const cid = "QmYCrsMpbGKUWuDa5FVXf8c42X1fzkq3impg7U6NKCnCjL";
const description = "Another NFT in my series of NFTS";
const traits = [
  {
    trait_type: "Background",
    value: "Skull cavern",
  },
];
const symbol = "NFT";

const data = {
  collection_id,
  name,
  permalink,
  cid,
  description,
	traits,
  symbol,
  recipient,
};
await sdrive
  .createMint(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("cNFT token mint failed:", error);
  });
