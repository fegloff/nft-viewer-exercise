import { useContext } from "react";
import NftCollection from "../../components/nft-collection/ntf-collection.componnet";
import NftForm from "../../components/nft-form/nft-form.component";
import { NftDetailContext } from "../../context/nft-detail.context";
import './home.styles.scss';


const Home = () => {
  const { nftItem } = useContext(NftDetailContext);
  console.log('nftItem',nftItem);
  return (
    <div className='home-container'>
      <div className='background-img'>
        <NftForm />
      </div>
      <NftCollection />
      { Object.keys(nftItem).length > 0 && (<div>hello</div>) }
    </div>
  )
}

export default Home;