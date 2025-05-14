import data from './products';
import StarRating from '../rating/Rating'
import ProductPrice from '../price/Price'

const ProductList = () => {
  return (
    <>
      {data.products.map((product) => (
        <div className="row border-top py-4" key={product.id}>
            <div className="col-3">
                <div className="image position-relative">
                <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
                <span className='discount'>-{product.discountPercentage}%</span>
            </div>
            </div>
            <div className="col-6">
                <h3 className="product-title">{product.title}</h3>
                <StarRating rating={product.rating} />
                <div className='description'>
                    {product.description}
                </div>
            </div>
            <div className='col-3'>
                <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
                <div className='button'>
                    <button className='btn btn-warning d-block w-100'>Add to cart</button>
                </div>
            </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
