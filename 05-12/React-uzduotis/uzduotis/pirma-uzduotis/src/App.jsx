import './App.css'
import Header from './components/header/Header';
import Buttons from './components/buttons/Buttons'
import Cards from './components/cards/Cards';
import Logo1 from './components/logo/Logo1';

function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <div className="intro">
          <h1 className='Vite'>Vite</h1>
          <h1>Next Generation<br />
          Frontend Tooling
          </h1>
          <p>Get ready for a development environment that can finally catch up with you</p>
        <Buttons />
        </div>
          <div className='logo1'>
          <Logo1 />  
          </div>
      </div>
      <Cards />
    </>
  );
}

export default App
