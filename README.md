# SDrive 

## The gateway to decentralization

<img src="https://static.sdrive.app/images/sdrive-logo-transparent.png" width="150" alt="SDrive Logo">


#### SDrive gives you access to large decentralized storage networks without compromising user experience or privacy. You can select from various storage providers such as ARWeave, Storj, and Shadow Drive, and pay for the services as you use them. There are no hidden charges.

## Requirements

- Node.js v14 or above
- An API key from [SDrive](https://sdrive.app/api)

## How to use

`npm i sdrive`

```
// Example usage
const sdrive = new SDrive("your_sdrive_apikey_here");
const base64File = sdrive.getBuffer(your_file_path);
const buffer = Buffer.from(base64File, "base64");

sdrive.uploadFile(buffer, filename)
  .then(response => {
    console.log("Upload successful:", response);
  })
  .catch(error => {
    console.error("Upload failed:", error);
  });
```

### Getting an API key

- Go to `https://sdrive.app/`
- Log in or tegister an account 
- Go to `https://sdrive.app/api` and create an API key

### API Documentation
`uploadFile(filebuffer, filename)` Uploads a file and returns a promise.


### Contribution
- Fork the repo
- Create a new branch
- Make your changes
- Create a pull request

### License

This project is licensed under the MIT License. See the LICENSE.md file for details.

### Contact

For more information or support, contact us at support@sdrive.app

