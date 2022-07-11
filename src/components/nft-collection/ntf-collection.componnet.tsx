import { Flex, Grid } from "@chakra-ui/react";
import NftItem from "../nft-item/nft-item.component";
import { OPENSEA_DATA } from '../../utils/opensea.data.js'


const NftCollection = () => {
  const data = OPENSEA_DATA.assets;
  
  return (
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      minH="100vh"
    >
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {
          data.filter((nft) => nft.image_preview_url && nft.name)
            .map((nft) => 
              (<NftItem key={nft.id} id={nft.id} imagePreview={nft.image_preview_url!} name={nft.name!} />)) 
        }
      </Grid>
    </Flex>
  )
}

export default NftCollection;