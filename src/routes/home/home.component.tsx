import NftCollection from "../../components/nft-collection/ntf-collection.componnet";
import './home.styles.scss';
import NftForm from "../../components/nft-form/nft-form.component";

const Home = () => {
  // useEffect(()=> {
  //   console.log("HOLA");
  //   const getItems = async () => {
  //     const items = await fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0xb35ec98ba0a1cf6b5c1d836a818d041a7cd9aa19&order_direction=desc&offset=0&limit=20&include_orders=false')
      
      
  //     //(`https://api.opensea.io/api/v1/assets?owner=0xb35ec98ba0a1cf6b5c1d836a818d041a7cd9aa19&order_direction=desc&offset=0&limit=50`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       return res.assets
  //     })
  //     .catch((e) => {
  //       console.error(e)
  //       console.error('Could not talk to OpenSea')
  //       return null
  //     })
  
  //     if (items.length === 0) { return }
  //     console.log({items});
  //   }
  //   getItems();
  // }, []);

  return (
    <div className='home-container'>
      <NftForm />
      <NftCollection />
    </div>
  )
}

export default Home;