const { SDrive } = require("sdrive");
const fs = require("fs/promises");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  const sdrive = new SDrive(process.env.SDRIVE_API_KEY);
  const filename = "data.json";
  const filedata = { data: "Hello world" };

  const jsonString = JSON.stringify(filedata); // Convert JSON object to a string
  const buffer = Buffer.from(jsonString); // Convert string to a Buffer

  await sdrive
    .upload(buffer, filename)
    .then((response) => {
      console.log("Upload successful:", response);
    })
    .catch((error) => {
      console.error("Upload failed:", error);
    });
})();
