import { useContext } from 'react';
import Home from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import { NftsContext } from './context/nfts.context';

import './App.scss';

const App = () => {
  const { nftItems } = useContext(NftsContext);
  return (
    <div className={`app-container ${nftItems.length > 0 ? 'background-image-partial' : 'background-image-full'}`}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App; 
