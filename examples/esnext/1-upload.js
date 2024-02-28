import { SDrive } from "sdrive";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
sdrive.network = "shdwdrive";
const filePath = "./hello.png";
const buffer = await fs.readFile(filePath);
await sdrive
  .upload(buffer, "hello.png")
  .then((response) => {
    console.log("Upload successful:", response);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  });
