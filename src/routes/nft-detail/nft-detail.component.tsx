import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

import { NftDetailContext } from "../../context/nft-detail.context";
import { CreatorType } from "../../components/nft-item/nft-item.types";
import { truncateAddressString } from "../../utils/web3/web3.utils";
import './nft-detail.styles.scss';

const NftDetail = () => {
  const { nftItem } = useContext(NftDetailContext);
  const navigate = useNavigate();
  const creator: CreatorType | null = nftItem ? nftItem.creator! : null;

  const handleButton = () => {
    navigate(-1);
  };

  const goToOpensea = () => {
    window.open(nftItem.permalink!,'_blank')
  }

  return (
    <div className="nft-detail-container">
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
                <p>
                  <b>Creator Address</b>
                  <br />
                  {truncateAddressString(creator.address!,10)}
                </p>
              </div>
            )}
            <button onClick={handleButton} className="detail-button">
              Close
            </button>
            { nftItem.permalink && (
              <button onClick={goToOpensea} className="detail-button">
                OpenSea
              </button>)}
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default NftDetail;
