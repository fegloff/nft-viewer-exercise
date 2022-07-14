import Home from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

import './App.scss';

const App = () => {

  return (
    <div className='app-container'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App; 
