import Home from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import './App.scss';
import Header from './components/header/header.component';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App; 
