import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Band from './Components/Band/Band';
import Desc from './Components/Desc/Desc';
import Footer from './Components/Footer/Footer';
import BandForm from './Components/BandForm/BandForm';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Band />
      <Desc />
      <BandForm 
        value = 'Acheter'
      />
      <Footer />
    </>
  );
}

export default App;
