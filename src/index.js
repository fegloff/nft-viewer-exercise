import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { BrowserRouter } from 'react-router-dom';

import { NftsProvider } from './context/nfts.context';
import { NftDetailProvider } from './context/nft-detail.context';
import App from './App';
import './index.scss';

import reportWebVitals from './reportWebVitals';

const getLibrary = (provider) => {
  return new Web3Provider(provider);
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <NftsProvider>
          <NftDetailProvider>
            <App />
          </NftDetailProvider>
        </NftsProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
