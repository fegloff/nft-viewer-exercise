export type CreatorType = {
  address: string | null;
  config: string | null;
  profileImgUrl: string | null;
  user: string | null;
}

export type NftItemType = {
  animationOriginalUrl: string | null;
  animationUrl: string | null;
  assetContract: any | null; //{address: '0xc24c51d7943e34ba9d5eff0a32f31d5df8907d85', asset_contract_type: 'semi-fungible', created_date: '2022-02-17T16:24:21.367133', name: 'Unidentified contract', nft_version: null, …}
  backgroundColor: string | null; //null
  collection: any | null; //{banner_image_url: null, chat_url: null, created_date: '2022-02-17T16:25:53.067153', default_to_fiat: false, description: null, …}
  creator: CreatorType | null; 
  decimals: number | null; //null
  description: string | null; // null
  externalLink: string | null; //null
  id: number | null; //43133258
  imageOriginalUrl: string | null; //null
  imagePreviewUrl: string | null; //null
  imageThumbnailUrl: string | null; //null
  imageUrl: string | null; //null
  isNsfw: boolean | null; //false
  isPresale: boolean | null; //false
  lastSale: any | null; // null
  listingDate: any | null; //null
  name: string | null; //null
  numSales: number | null; //0
  owner: any | null; //{user: {…}, profile_img_url: 'https://storage.googleapis.com/opensea-static/opensea-profile/1.png', address: '0x0000000000000000000000000000000000000000', config: ''}
  permalink: string | null; //"https://testnets.opensea.io/assets/rinkeby/0xc24c51d7943e34ba9d5eff0a32f31d5df8907d85/0"
  seaportSellOrders: any | null; // null
  sellOrders: any | null; // null
  tokenId: string | null; // "0"
  tokenMetadata: string | null; // "https://ipfs.moralis.io:2053/ipfs/QmS2PJFdrwirjBFuJT2D2vQZoWcgb8mUV171gmSAzx8r8N/metadata/%7Bid%7D.json"
  topBid: any | null; // null
  traits: any | null; //[]
  transferFee: any | null; //null
  transferFeePaymentToken: any | null; //null
}

