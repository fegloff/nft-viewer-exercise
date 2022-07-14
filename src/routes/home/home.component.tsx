import { useContext, useEffect, useState } from "react";
import ItemDetail from "../../components/item-detail/item-detail.component";

import NftCollection from "../../components/nft-collection/ntf-collection.componnet";
import NftForm from "../../components/nft-form/nft-form.component";
import { NftDetailContext } from "../../context/nft-detail.context";

import "./home.styles.scss";

const Home = () => {
  const [isItemDetail, setIsItemDetail] = useState(0);
  const { nftItem } = useContext(NftDetailContext);

  useEffect(() => {
    setIsItemDetail(Object.keys(nftItem).length);
  }, [nftItem]);

  return (
    <div className="home-container">
      <NftForm />
      {isItemDetail === 0 ? <NftCollection /> : <ItemDetail />}
    </div>
  );
};

export default Home;
