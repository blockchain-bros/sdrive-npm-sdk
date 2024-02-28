# SDrive 

## The gateway to decentralization

#### SDrive gives you access to large decentralized storage networks without compromising user experience or privacy. You can select from various storage providers such as ARWeave, Storj, and Shadow Drive, and pay for the services as you use them. There are no hidden charges.

## How to use

`npm i sdrive`

```
// Example usage
const sDrive = new SDrive("your_sdrive_apikey_here");
sDrive.uploadFile(fileStream, filename)
  .then(response => {
    console.log("Upload successful:", response);
  })
  .catch(error => {
    console.error("Upload failed:", error);
  });
```

## API KEY

- Go to `https://sdrive.app/`
- Log in or tegister an account 
- Go to `https://sdrive.app/api` and create an API key

