import { SDrive } from "sdrive";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
sdrive.page = 1;
sdrive.limit = 2;
await sdrive
  .listObjects()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("List failed:", error);
  });
