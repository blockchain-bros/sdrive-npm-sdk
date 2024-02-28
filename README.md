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

Where `desired_network` is either "arweave", "shdwdrive" or "ipfs"

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

const filePath = './hello.png';
await sdrive.upload(filePath, "hello.png")
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

- Go to `https://sdrive.app/`
- Log in or register an account 
- Go to `https://sdrive.app/api` and create an API key

### Pricing

- Uploads are paid for with a one time fee
- No bandwidth charge
- 1 credit ≈ 0.00035 USDC

#### Price Chart

- 0.001 megabyte: 1 credits (0.00035 USD)
- 0.005 megabyte: 1 credits (0.00035 USD)
- 0.01 megabyte: 1 credits (0.00035 USD)
- 0.05 megabyte: 1 credits (0.00035 USD)
- 0.1 megabyte: 2 credits (0.00070 USD)
- 0.5 megabyte: 6 credits (0.00210 USD)
- 1 megabyte: 11 credits (0.00385 USD)
- 5 megabyte: 51 credits (0.01785 USD)
- 20 megabyte: 203 credits (0.07105 USD)
- 50 megabyte: 513 credits (0.17955 USD)
- 100 megabyte: 1051 credits (0.36785 USD)

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

