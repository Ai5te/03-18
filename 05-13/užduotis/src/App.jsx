import './App.css'
import ProductList from './components/product/product'

function App() {
  
  return (
    <>
      <div className="container py-5" style={{ maxWidth: '1024px' }}>
        <h1>Produktų sąrašas</h1>
        <div className="result mt-5">
            <ProductList />
        </div>
    </div>

    </>
  )
}

export default App
