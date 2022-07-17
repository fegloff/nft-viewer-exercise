import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { NftDetailContext } from '../../context/nft-detail.context';
import { NftItemType } from './nft-item.types';

import './nft-item.styles.scss';

export type NftItemProps = {
  nftItem: NftItemType;
};

/**
 * Component that renders a NFT in the gallery
 */
const NftItem = ({ nftItem }: NftItemProps) => {
  
  // nftItem object to render  
  const { imagePreviewUrl, name } = nftItem;
  
  // Hook that store nftItem in App's state. 
  const { setNftDetail } = useContext(NftDetailContext);
  
  // Hook that helps App's routing.
  const navigate = useNavigate();

  const handleButton = () => {
    setNftDetail(nftItem);
    navigate(`nft/${nftItem.id}`)
  }

  return (
    <Card className='card'>
      <CardActionArea>
        <div className="card-media">
          <LazyLoadImage 
            alt={name!}
            src={imagePreviewUrl ? imagePreviewUrl : ''}
            effect="blur"
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: '15px', 
              boxShadow: '0 2px 2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)' }}
          />
        </div>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" fullWidth onClick={handleButton}>
          more
        </Button>
      </CardActions>
    </Card>
  );
};
export default NftItem;
