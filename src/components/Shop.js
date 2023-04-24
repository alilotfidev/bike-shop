import '../css/Shop.css';
const Shop = ({ products, priceFormatter, onAddToCart, addingProduct }) => {
  const handleAddToCart = (id) => {
    onAddToCart(id, 1);
  };
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
      <button
        className='add-to-cart'
        onClick={() => handleAddToCart(product.id)}
        disabled={addingProduct}
      >
        {addingProduct ? 'adding selected item to cart...' : 'add to cart'}
      </button>
    </div>
  ));
  return (
    <div className='Shop'>
      <div className='shop-product-list'>{productsListElements}</div>
    </div>
  );
};

export default Shop;
