import { useContext, useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useWeb3React } from "@web3-react/core";

import { isAddress } from 'ethers/lib/utils';
import { NftsContext } from '../../context/nfts.context';
import { EthChainIdEnum } from '../../utils/web3/web3.utils';
import AlertDialog from '../alert-dialog/alert-dialog.component';

import './nft-form.styles.scss';


/**
 * Component form that allows search for NFTs of a given wallet address
 */
const NftForm = () => {
  /**
   * GetNfts: make API Calls to OpenSean endpoint
   * nftItems: Array of Nfts
   * apiCallResult: API response code.
   */
  const { getNfts, nftItems, apiCallResult } = useContext(NftsContext);
  /** Handles form input state */
  const [ nftInput, setNftInput ] = useState('');
   /** Handles errorMessage state */
  const [ errorMessage, setErrorMessage ] = useState('');
   /**
    * account: Wallet account address 
    * active: Wallet connection status
    * chainId: Wallet's chainId
    */
  const { account, active, chainId } = useWeb3React();
  
  useEffect(()=>{
    if (account && active) {
      setNftInput(account);
    } else {
      setNftInput('');
    }
  },[account, active])

  useEffect(()=>{
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
      setErrorMessage(`[${nftInput}] Incorrect Address`);
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
      </form>
      {errorMessage && <AlertDialog errorMessage={errorMessage} openAction={true} />}
    </div>
  )
}

export default NftForm;