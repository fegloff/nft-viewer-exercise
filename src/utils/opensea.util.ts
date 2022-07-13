import axios from "axios";

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

export const getNftItems = async (ownerAddress: string) => {
  const url = `${process.env.REACT_APP_OPENSEA_API}&owner=${ownerAddress}`;
  const items = await axios.get(url!)
    .then((res) => {
      console.log({res});
      return res.data.assets;
    })
    .catch((e) => {
      console.error(e);
      console.error("Could not talk to OpenSea");
      return null;
    });
  return items;
};


// export const getNftItems = async (ownerAddress: string) => {
//   const url = `${process.env.REACT_APP_OPENSEA_API}&owner=${ownerAddress}`;
//   const items = await fetch(url!)
//     //(`https://api.opensea.io/api/v1/assets?owner=0xb35ec98ba0a1cf6b5c1d836a818d041a7cd9aa19&order_direction=desc&offset=0&limit=50`)
//     .then((res) => res.json())
//     .then((res) => {
//       console.log({res});
//       return res.assets;
//     })
//     .catch((e) => {
//       console.error(e);
//       console.error("Could not talk to OpenSea");
//       return null;
//     });
//   return items;
// };