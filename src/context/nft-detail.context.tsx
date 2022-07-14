import react, { createContext, useState } from 'react';
import { NftItemType } from '../components/nft-item/nft-item.types';

type NftContextType = {
  nftItem : NftItemType;
  setNftDetail: (nft: NftItemType) => void
}

export const NftDetailContext = createContext<NftContextType>({
  nftItem : {} as NftItemType,
  setNftDetail : (nft: NftItemType) => {}
})

interface Props {
  children: React.ReactNode;
}

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