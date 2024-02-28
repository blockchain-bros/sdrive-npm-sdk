import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
sdrive.network = "ipfs";
const filePath = "./01PenitentiaryPhilosophy.mp3";
await sdrive
  .upload(filePath, "01PenitentiaryPhilosophy.mp3")
  .then((response) => {
    console.log("Upload successful:", response);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  });
