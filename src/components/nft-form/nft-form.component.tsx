import { useContext, useState } from 'react';
import { NftsContext } from '../../context/nfts.context';
import { ChangeEvent } from 'react';
import './nft-form.styles.scss';

const NftForm = () => {
  const { getNfts, apiCallResult } = useContext(NftsContext);
  const [ nftInput, setNftInput ] = useState('');
  
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    getNfts(nftInput);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNftInput(event.target.value);
  }
  
  return (
    <div className='cover-image-container'>
      <form onSubmit={handleSubmit} className='form-container'>
          <input 
            type="text" 
            value={nftInput} 
            placeholder='Wallet address' 
            onChange={handleChange} 
            className='flex-items' 
            required/>
          <button type="submit" className='flex-items'>Get NFT</button>
          { !apiCallResult && (<div>ERROR</div>)  }
      </form>
    </div> 
  )
}

export default NftForm;