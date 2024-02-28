const { SDrive } = require("../../dist/cjs/index.cjs");
const fs = require("fs/promises");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
  const filePath = "./hello.png";
  await sdrive
    .upload(filePath, "hello.png")
    .then((response) => {
      console.log("Upload successful:", response);
    })
    .catch((error) => {
      console.error("Upload failed:", error);
    });
})();
