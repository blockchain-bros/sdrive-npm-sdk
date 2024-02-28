import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
sdrive.network = "shdwdrive";
const filePath = "./covid.mp4";
const metadata = {
  name: "COVID video",
  description: "A video about COVID",
  category: "video",
  tag: "test",
  creator: "unknown",
  createdAt: "2024-02-03 16:10:10",
  fileType: "mp4",
  language: "english"
}
await sdrive
  .upload(filePath, "covid.mp4", metadata)
  .then((response) => {
    console.log("Upload successful:", response);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  });
