import NftCollection from "../../components/nft-collection/ntf-collection.componnet";
import NftForm from "../../components/nft-form/nft-form.component";

import "./home.styles.scss";

const Home = () => {

  return (
    <div className="home-container">
      <NftForm />
      <NftCollection />
    </div>
  );
};

export default Home;
