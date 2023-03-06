import '../css/NewArrivals.css';
const NewArrivals = ({ priceFormatter, products }) => {
  const productsListElements = products.map((product) => (
    <div className='arrivals-product' key={product.id}>
      <img
        src={product.image.url}
        alt={product.name}
        className='arrivals-product-image'
      />
      <p className='bicycle-name'>{product.name}</p>
      <p className='bicycle-price'>
        {priceFormatter.format(product.price.raw)}
      </p>
    </div>
  ));
  return (
    <div className='NewArrivals'>
      <h2 className='new-arrivals-title'>
        Discover
        <br />
        Our New Arrivals
      </h2>
      <div className='arrivlas-product-list'>{productsListElements}</div>
    </div>
  );
};

export default NewArrivals;
