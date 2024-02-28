const {SDrive} = require("sdrive");
const fs = require("fs/promises");
const dotenv = require("dotenv");
dotenv.config();

(async()=>{
const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
const filePath = "./hello.png";
const buffer = await fs.readFile(filePath);
await sdrive
  .upload(buffer, "hello.png")
  .then((response) => {
    console.log("Upload successful:", response);
  })
  .catch((error) => {
    console.error("Upload failed:", error);
  })
})()
