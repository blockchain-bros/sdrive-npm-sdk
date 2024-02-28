import { PublicKey } from "@solana/web3.js";
export type MediaMetadata = {
  name: string;
  description: string;
  category: string;
  tag: string;
  creator?: string | string[];
  createdAt?: Date;
  updatedAt?: Date;
  license?: string;
  fileType?: string;
  url?: string;
  size?: number;
  resolution?: string;
  duration?: number;
  language?: string;
};

export type Creator = {
  address: PublicKey;
  share: number;
};

export type Attribute = {
  trait_type: string;
  value: string;
};
export type Networks =  "arweave" | "ipfs"

export enum CollectionSize {
  SMALL = "1024",
  MEDIUM = "16384",
  LARGE = "65536",
  XLARGE = "262144",
  XXLARGE = "1048576",
}
export type Meta = {
  nftImagePermalink: string
  nftDescription: string
  nftName: string
  nftTraits: Attribute[]
  fee: number,
  imageType: string,
  nftSymbol: string,
  network: Networks
}

export type Collection = {
  username: string;
  api_key: string;
  collectionName: string;
  collectionDescription: string;
  collectionImageUri: string;
  fee: number;
  collectionSymbol: string;
  creators: Creator[];
  size: CollectionSize;
};

export type Mint = {
  username: string;
  api_key: string;
  recipient: string;
  collection_id: string;
  nftName: string;
  nftImagePermalink: string;
  nftImageCID: string;
  nftDescription: string;
  nftTraits: Attribute[];
  nftSymbol: string;
};
