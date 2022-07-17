import { Dispatch, SetStateAction } from "react";
import axios from "axios";

export const getNftItems = async (ownerAddress: string, setApiCallResult: Dispatch<SetStateAction<number>>) => {
  const url = `${process.env.REACT_APP_OPENSEA_API}&owner=${ownerAddress}`;
  const items = await axios.get(url!)
    .then((res) => {
      console.log({res});
      setApiCallResult(res.status);
      return res.data.assets;
    })
    .catch((e) => {
      setApiCallResult(500);
      console.error(e);
      console.error("Could not talk to OpenSea");
      return null;
    });
  return items;
};
