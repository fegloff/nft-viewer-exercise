import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { NftItemType } from "../../components/nft-item/nft-item.types";

/**
 * Retrieves the NFTs of a given Wallet Address.
 * @param ownerAddress {string} Wallet address
 * @param setApiCallResult {Dispatch<SetStateAction<number>} Call back that saves API response code
 * @returns {Promise<NftItemType[]>} Array of NFT items
 */
export const getNftItems = async (ownerAddress: string, setApiCallResult: Dispatch<SetStateAction<number>>) : Promise<NftItemType[]> => {
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
