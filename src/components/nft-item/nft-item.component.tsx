import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NftItemType } from './nft-item.types';
import './nft-item.styles.scss';

export type NftItemProps = {
  nftItem: NftItemType;
  // id: number;
  // imagePreview: string;
  // name: string;
};

const NftItem = ({ nftItem }: NftItemProps) => {
  const { imagePreviewUrl, name } = nftItem; 
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia className="card-media"
          component="img"
          image={imagePreviewUrl ? imagePreviewUrl : ''}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default NftItem;
