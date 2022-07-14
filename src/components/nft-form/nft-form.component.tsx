import { useContext, useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { NftsContext } from '../../context/nfts.context';
import { ChangeEvent } from 'react';
import './nft-form.styles.scss';

const NftForm = () => {
  const { getNfts, apiCallResult } = useContext(NftsContext);
  const [ nftInput, setNftInput ] = useState('');
  const { account, active } = useWeb3React();
  
  useEffect(()=>{
    console.log('useEffect');
    if (account && active) {
      setNftInput(account);
    } else {
      setNftInput('');
    }
  },[account, active])
  
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    getNfts(nftInput);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNftInput(event.target.value);
  }
  
  return (
    <div className='nft-form-container'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={nftInput} 
              placeholder='Wallet address' 
              onChange={handleChange} 
              className='form-input' 
              required
              /><br />
            <button type="submit" className='form-button'>GET NFTS</button>
            { !apiCallResult && (<div>ERROR</div>)  }
        </form>
      </div>
    </div> 
  )
}

export default NftForm;