import { useState } from 'react'
import './App.css'
import ButtonPlus from './components/button/ButtonPlus'
import ButtonMinus from './components/button/ButtonMinus'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Quantity')

  const handleClickPlus = () => {
    if(count < 100){
      setCount(count + 1);
    }
  };
  
  const handleClickMinus = () => {
    if(count > 0){
        setCount(count - 1);
    }
  };

  return (
    <>
     <h2>Pirma užduotis</h2>
     <div className='d-flex align-items-center'>
      <ButtonPlus onClick={handleClickPlus} />
     <h3>{text}</h3>
     <ButtonMinus onClick={handleClickMinus} />
     </div>
     <p>{count}</p>
    </>
  )
}

export default App
