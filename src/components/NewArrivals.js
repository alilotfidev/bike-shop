import '../css/NewArrivals.css';
import { Link } from 'react-router-dom';

const NewArrivals = ({ priceFormatter, products }) => {
  const productsListElements = products.map((product) => (
    <div className='arrivals-product' key={product.id}>
      <Link to='/shop'>
        <img
          src={product.image.url}
          alt={product.name}
          className='arrivals-product-image'
        />
      </Link>
      <Link to='/shop'>
        <p className='bicycle-name'>{product.name}</p>
      </Link>
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
