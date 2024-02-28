import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
const { pubkey } = process.env;

const collectionName = "My Coll 2";
const collectionDescription = "a collection of things I like";
const collectionImageUri =
  "https://3u7fhuyazmx4q7jdegtopzdj7ubiegdq4qhbakw4asjb7ls2lkxa.arweave.net/3T5T0wDLL8h9IyGm5-Rp_QKCGHDkDhAq3ASSH65aWq4";
const fee = 500; // 5%
const collectionSymbol = "FILE";
const creators = [{ address: pubkey, share: 100 }];

const size = "1024" // ~0.26 SOL
//const size = "16384"; // ~0.35 SOL
//const size = "65536" // ~0.8 SOL
//const size = "262144"; // ~2.1 SOL
//const size = "1048576" // ~7.6 SOL

const data = {
  collectionName,
  collectionDescription,
  collectionImageUri,
  fee,
  collectionSymbol,
  creators,
  size,
};
await sdrive
  .createCollection(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Collection creation failed:", error);
  });
