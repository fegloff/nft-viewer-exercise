import { useContext } from "react";
import NftItem from "../nft-item/nft-item.component";
import { NftsContext } from "../../context/nfts.context";
import "./ntf-collection.styles.scss";

const NftCollection = () => {
  const { nftItems } = useContext(NftsContext);
  
  return (
    <div className="collection-container">
      {nftItems
        .filter((nft) => nft.imagePreviewUrl && nft.name)
        .map((nft) => (
          <NftItem
            key={nft.id}
            nftItem={nft}
          />
        ))}
    </div>
  );
};

export default NftCollection;
