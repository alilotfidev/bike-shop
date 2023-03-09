import '../css/Shop.css';
const Shop = ({ products, priceFormatter }) => {
  const productsListElements = products.map((product) => (
    <div className='shop-product' key={product.id}>
      <img
        src={product.image.url}
        alt={product.name}
        className='shop-product-image'
      />
      <p className='bicycle-name'>{product.name}</p>
      <p className='bicycle-price'>
        {priceFormatter.format(product.price.raw)}
      </p>
    </div>
  ));
  console.log(products);
  return (
    <div className='Shop'>
      <div className='shop-product-list'>{productsListElements}</div>
    </div>
  );
};

export default Shop;
