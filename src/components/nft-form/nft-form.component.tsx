import { useContext, useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useWeb3React } from "@web3-react/core";
import { isAddress } from 'ethers/lib/utils';
import { NftsContext } from '../../context/nfts.context';
import { EthChainIdEnum } from '../../utils/web3/web3.utils';
import './nft-form.styles.scss';

const NftForm = () => {
  const { getNfts, nftItems, apiCallResult } = useContext(NftsContext);
  const [ nftInput, setNftInput ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const { account, active, chainId } = useWeb3React();
  
  useEffect(()=>{
    if (account && active) {
      setNftInput(account);
    } else {
      setNftInput('');
    }
  },[account, active])

  useEffect(()=>{
    console.log('APiCALL',apiCallResult);
    if (apiCallResult > 0) {
      if (apiCallResult === 500) {
        setErrorMessage('Error connecting to Opensea');
        setNftInput('');
        return;
      }
      if (apiCallResult === 200 && nftItems.length === 0) {
        setErrorMessage('NTFs not found. Check the address and try again');
        return;
      }
      if (apiCallResult >= 400) {
        setErrorMessage('Bad Request');
        setNftInput('');
        return;
      }
    } else {
      setErrorMessage('');
    }
   
  },[apiCallResult, nftItems])
  
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isAddress(nftInput)) {
      getNfts(nftInput);
      setErrorMessage('');
    } else {
      setNftInput('');
      setErrorMessage(`${nftInput}\nIncorrect Address`);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNftInput(event.target.value);
  }
  
  return (
    <div className="nft-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={nftInput}
          placeholder="Wallet address"
          onChange={handleChange}
          className="form-input"
          required
        />
        {account && active && nftInput && (
          <div className="chain-id-label">{EthChainIdEnum[chainId!]}</div>
        )}
        <button type="submit" className="form-button">
          GET NFTS
        </button>
        {errorMessage && <div className="error-label">{errorMessage}</div>}
      </form>
    </div>
  )
}

export default NftForm;