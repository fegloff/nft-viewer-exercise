import { useContext } from "react";
import { Animate } from "react-simple-animate";
import { NftDetailContext } from "../../context/nft-detail.context";
import { CreatorType, NftItemType } from "../nft-item/nft-item.types";

import "./item-detail.styles.scss";

const ItemDetail = () => {
  const { nftItem, setNftDetail } = useContext(NftDetailContext);
  const creator: CreatorType | null = nftItem ? nftItem.creator! : null;

  const handleButton = () => {
    setNftDetail({} as NftItemType);
  };

  return (
    <Animate
      play={true}
      end={{ opacity: 1, filter: "blur(0)" }}
      start={{ opacity: 0, filter: "blur(10px)" }}
      duration={0.6}
    >
      <div className="item-detail-container">
        <img
          src={nftItem.imageUrl!}
          alt={nftItem.name!}
          className="nft-detail-image"
        />
        <div className="nft-detail">
          <div className="title">
            <h2>
              {nftItem.name} <br /> <span>Token ID: {nftItem.tokenId}</span>
            </h2>
          </div>
          <p>{nftItem.description}</p>
          {creator && (
            <div className="creator">
              <h3>Creator</h3>
              <img src={creator.profileImgUrl!} alt="creator" />
              <p><b>Creator Address</b><br/>{creator.address!}</p>
            </div>
          )}
          <button onClick={handleButton} className="detail-button">
            Close
          </button>
        </div>
      </div>
    </Animate>
  );
};

export default ItemDetail;
