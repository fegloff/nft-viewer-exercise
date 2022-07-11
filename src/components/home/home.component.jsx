import { useEffect } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Input,
  Button
} from "@chakra-ui/react";
import NftCollection from "../nft-collection/ntf-collection.componnet";

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
      Connect your wallet or place a wallet address
      <Input placeholder="Wallet address"></Input>
      <Button>Get NFTs</Button>
      <NftCollection />
    </div>
  )
}

export default Home;