import '../css/CartItem.css';
const CartItem = ({
  item,
  priceFormatter,
  onUpdateCartQty,
  onRemoveFromCart,
}) => {
  // for running the functions in the app component
  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };
  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };
  return (
    <div className='CartItem'>
      <img className='cart-item-image' src={item.image.url} alt={item.name} />
      <div className='cart-item-details'>
        <h4 className='cart-item-details-name'>{item.name}</h4>
        <div className='cart-item-details-qty'>
          <div
            className='decrease-qty-button'
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </div>
          <p>{item.quantity}</p>
          <div
            className='increase-qty-button'
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </div>
        </div>
        <div className='cart-item-details-price'>
          {priceFormatter.format(item.line_total.raw)}
        </div>
      </div>
      <button
        type='button'
        className='cart-item-remove btn orange-btn'
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
