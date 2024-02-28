import { SDrive } from "../../dist/esnext/index.js";
import fs from "fs/promises";
import "dotenv/config";

const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
await sdrive
  .listCollections()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Collection listing failed:", error?.message);
  });
