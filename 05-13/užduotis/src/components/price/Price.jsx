
const ProductPrice = ({ price, discountPercentage }) => {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;

  return (
    <div className='price mb-4'>
      <span className='current'>${priceWithDiscount.toFixed(2)}</span>{' '}
      <span className='old text-muted text-decoration-line-through'>
        ${price.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductPrice;
