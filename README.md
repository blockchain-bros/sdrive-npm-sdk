# SDrive 

## The gateway to decentralization

<img src="https://static.sdrive.app/images/sdrive-logo-transparent.png" width="150" alt="SDrive Logo">

#### SDrive gives you access to large decentralized storage networks without compromising user experience or privacy. You can select from various storage providers such as ARWeave, Storj, and Shadow Drive, and pay for the services as you use them. There are no hidden charges.

## Requirements

- Node.js v14 or above
- An API key from [SDrive](https://sdrive.app/api)

## How to use

`npm i sdrive`


### UPLOAD
```
import * as SDrive from "sdrive";
const sdrive = new SDrive("your_sdrive_apikey_here");

const filePath = './hello.png';
const buffer = await fs.readFile(filePath);
await sdrive.uploadFile(buffer, "hello.png")
  .then(response => {
    console.log("Upload successful:", response);
  })
  .catch(error => {
    console.error("Upload failed:", error);
  });
```

### LIST OBJECTS
```
import * as Sdrive from "sdrive";
const sdrive = new SDrive("your_sdrive_apikey_here");

await sdrive.listObjects()
  .then(response => {
    console.log(response);
  })
```

### Getting an API key

- Go to `https://sdrive.app/`
- Log in or register an account 
- Go to `https://sdrive.app/api` and create an API key

### API Documentation
`uploadFile(filebuffer, filename)` Uploads a file and returns a promise.
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

