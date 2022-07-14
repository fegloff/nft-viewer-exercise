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
