import { Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

import './App.scss';
import NftDetail from "./routes/nft-detail/nft-detail.component";
const App = () => {

  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nft/:id' element={<NftDetail />} /> 
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App; 
