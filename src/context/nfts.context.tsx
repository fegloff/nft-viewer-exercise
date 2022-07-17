import react, { createContext, useState } from "react";
import camelcaseKeys from "camelcase-keys";
//import { OPENSEA_DATA } from '../utils/opensea/opensea.data';
import { NftItemType } from "../components/nft-item/nft-item.types";
import { getNftItems } from "../utils/opensea/opensea.util";

type NftsContextType = {
  /** Array of NFTs */
  nftItems: NftItemType[];
  /** get NFT array associated to given wallet address */
  getNfts: (address: string) => void;
  /** Api result code */
  apiCallResult: number;
};

/**
 * Nft Array Context.
 */
export const NftsContext = createContext<NftsContextType>({
  nftItems: [],
  getNfts: () => {},
  apiCallResult: 0,
});

interface Props {
  children: React.ReactNode;
}

/**
 * Provider that wraps Nfts Array context so other components could has access to the values inside.
 */
export const NftsProvider: react.FC<Props> = ({ children }) => {
  const [nftItems, setNftItems] = useState<NftItemType[]>([]);
  const [apiCallResult, setApiCallResult] = useState(0);

  const getNfts = async (walletAddress: string) => {
    const data = await getNftItems(walletAddress, setApiCallResult);
    //const data = OPENSEA_DATA.assets;

    if (data) {
      setNftItems(camelcaseKeys(data, { deep: true }));
    }
  };

  const value = {
    nftItems,
    getNfts,
    apiCallResult,
  };

  return <NftsContext.Provider value={value}>{children}</NftsContext.Provider>;
};
