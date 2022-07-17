import react, { createContext, useState } from 'react';
import { NftItemType } from '../components/nft-item/nft-item.types';


type NftContextType = {
  /** nftItem: nft item information */
  nftItem : NftItemType;
  /** setNftDetail: updates nft item states */
  setNftDetail: (nft: NftItemType) => void
}

/**
 * Nft Item Detail Context.
 */
export const NftDetailContext = createContext<NftContextType>({
  nftItem : {} as NftItemType,
  setNftDetail : (nft: NftItemType) => {}
})

interface Props {
  children: React.ReactNode;
}

/**
 * Provider that wraps Nft item detail context so other components could has access to the values inside.
 */
export const NftDetailProvider: react.FC<Props> = ({ children }) => {
  const [ nftItem, setNftItem ] = useState<NftItemType>({} as NftItemType);

  const setNftDetail = (nft: NftItemType) => {
    setNftItem(nft);
  }

  const value = {
    nftItem,
    setNftDetail
  }

  return (
    <NftDetailContext.Provider value={value}>{children}</NftDetailContext.Provider>
  )
}