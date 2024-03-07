# SDrive 

## The gateway to decentralization

<img src="https://static.sdrive.app/images/sdrive-logo-transparent.png" width="150" alt="SDrive Logo">

#### SDrive gives you access to large decentralized storage networks without compromising user experience or privacy. You can select from various storage providers such as ARWeave, Shdw Drive, and IPFS, and pay for the services as you use them. There are no hidden charges and no subscription.

## Requirements

- Node.js v14 or above
- An API key from [SDrive](https://sdrive.app/api)

## Usage

`npm i sdrive`

#### if using modules
```
import {SDrive} from "sdrive";
```

#### if using CommonJS
substitute the import command below with this
```
const {SDrive} = require("sdrive");
```

### Setting network (optional)
Choose the network you want to upload your data to. Default is Arweave.

```
import {SDrive} from "sdrive";
const sdrive = new SDrive("your_sdrive_apikey_here");
sdrive.network = desired_network // optional
```

Where `desired_network` is either "arweave" or "ipfs"

### UPLOAD using buffers
```
import {SDrive} from "sdrive";
import fs from "fs/promises";
const sdrive = new SDrive("your_sdrive_apikey_here");

const filePath = './hello.png';
const buffer = await fs.readFile(filePath);
await sdrive.upload(buffer, "hello.png")
  .then(response => {
    console.log("Upload successful:", response);
  })
  .catch(error => {
    console.error("Upload failed:", error);
  });
```

### UPLOAD using filestream
```
import {SDrive} from "sdrive";
import fs from "fs/promises";
const sdrive = new SDrive("your_sdrive_apikey_here");

const filepath = './hello.png';
const fileName = "images/hello.png"; 
await sdrive.upload(filePath, fileName)
  .then(response => {
    console.log("Upload successful:", response);
  })
  .catch(error => {
    console.error("Upload failed:", error);
  });
```


### LIST OBJECTS
```
import {SDrive} from "sdrive";
const sdrive = new SDrive("your_sdrive_apikey_here");

sdrive.page = 1; //optional
sdrive.limit = 10; //optional

await sdrive.listObjects()
  .then(response => {
    console.log(response);
  })
```

### Getting an API key

- Go to `https://sdrive.pro/` and create an API key

### Pricing

- Uploads are paid for with a one time fee

1 staked on-chain Credit = 100 KB.

Stake Credits at https://sdrive.pro

### API Documentation
`upload(filebuffer, filename)` Uploads a file and returns a promise.
`listObjects()` Returns a promise that resolves to all files uploaded with your API key.


### Contribution
- Fork the repo
- Create a new branch
- Make your changes
- Create a pull request

### License

This project is licensed under the MIT License. See the LICENSE.md file for details.

### Contact

For more information or support, contact us at support@sdrive.app

