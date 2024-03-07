import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
sdrive.network = "ipfs";
await sdrive
  .upload("./hello.png", "iamges/hello.png")
  .then((response) => {
    console.log("Upload successful:", response);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  });
