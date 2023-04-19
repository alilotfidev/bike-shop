import '../css/Cart.css';
import CartItem from './CartItem';
const Cart = ({
  cart,
  priceFormatter,
  onUpdateCartQty,
  onRemoveFromCart,
  onEmptyCart,
}) => {
  console.log(priceFormatter);
  const cartItems =
    cart.total_unique_items > 0
      ? cart.line_items.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            priceFormatter={priceFormatter}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))
      : null;
  const handleEmptyCart = () => {
    onEmptyCart();
  };
  return (
    <div className='Cart'>
      {cart.total_unique_items > 0 ? (
        <div className='cart-content'>
          <h4 className='cart-heading'>Your Shopping Cart</h4>
          <div className='cart-items'>{cartItems}</div>
          <div className='cart-footer'>
            <button className='btn'>Checkout</button>
            <button className='btn' onClick={handleEmptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      ) : (
        <p className='empty-cart-text'>
          You have no items in your shopping cart, start adding some!
        </p>
      )}
    </div>
  );
};

export default Cart;
