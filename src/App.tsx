import { Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import NftDetail from "./routes/nft-detail/nft-detail.component";

import './App.scss';

const App = () => {

  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nft/:id' element={<NftDetail />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
