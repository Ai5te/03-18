import { useState } from 'react'
import './App.css'

function App() {
  const [product, setProduct ] = useState('');
  const [productList, setProductList] = useState([]);

  const handleAdd = () => {
    if (product === '') return;
    setProductList([...productList, product]);
    setProduct('');
  }

  const handleRemove = (index) => {
    const updatedList = productList.filter((_,i) => i !== index);
    setProductList(updatedList);
    }


  return (
    <>
    <div className="container mt-5" style={{ maxWidth: 600 }}>
        <h2 className="mb-4">Produktų sarašas</h2>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className='form-control'
            placeholder='Įveskite produktą' 
            value={product} 
            onChange={(e) => setProduct(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAdd}>Pridėti</button>
        </div>
        <ul className="list-group">
          {productList.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item}
              <button className="btn btn-sm btn-danger" onClick={() => handleRemove(index)}>
                Pašalinti
              </button>
            </li>
          ))}
        </ul>
    </div>
    </>
  );
}

export default App;
