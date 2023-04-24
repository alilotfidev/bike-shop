import { useEffect, useRef, useState } from 'react';
//react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import BigDealSection from './components/BigDealSection';
import ContactInfoSection from './components/ContactInfoSection';
import CtaSection from './components/CtaSection';
import CustomerCommentsSection from './components/CustomerCommentsSection';
import HeroSecion from './components/HeroSection';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Popup from './components/Popup';

// commerce instance
import commerce from './lib/commerce';
import Loading from './components/Loading';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  // products states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addingProduct, setAddingProduct] = useState(false);
  const [order, setOrder] = useState({});
  const [popup, setPopup] = useState({
    show: false,
    content: '',
    textColor: '',
    backgroundColor: '',
  });

  // fetching products data
  const fetchProducts = () => {
    setIsLoading(true);
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
        setIsLoading(false);
      });
  };
  //   Retrieve the current cart or create one if one does not exist
  //   https://commercejs.com/docs/sdk/cart
  //
  const fetchCart = () => {
    setIsLoading(true);
    commerce.cart
      .retrieve()
      .then((cart) => {
        setIsLoading(false);
        setCart(cart);
        console.log(cart);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('There was an error fetching the cart', error);
      });
  };
  const handleAddToCart = (productId, quantity) => {
    setAddingProduct(true);
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
        setPopup({
          show: true,
          content: 'item added to cart :)',
          textColor: 'white',
          backgroundColor: '#0c1310',
        });
        setAddingProduct(false);
      })
      .catch((error) => {
        console.error('There was an error adding the item to the cart', error);
        setPopup({
          show: true,
          content: 'something went wrong while adding item to the cart :(',
          textColor: 'white',
          backgroundColor: '#0c1310',
        });
        setAddingProduct(false);
      });
  };
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log('There was an error updating the cart items', error);
      });
  };
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          'There was an error removing the item from the cart',
          error
        );
      });
  };
  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error('There was an error emptying the cart', error);
      });
  };
  const refreshCart = async () => {
    const newCart = commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenID, newOrder) => {
    try {
      // console.log(newOrder);
      // const incomingOrder = await commerce.checkout.capture(
      //   checkoutTokenID,
      //   newOrder
      // );
      // setOrder(incomingOrder);
      // refreshCart();
      //confirmation page
      // console.log(order);

      // for now we just want to show a fake confirmation page and dont do the real checkout
      refreshCart();
      // redirecting is done in the paymentForm component
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setPopup({ ...popup, show: false });
    }, 3000);
  }, [popup.show]);

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  const bodyRef = useRef();
  return (
    <Router>
      <div className='App' ref={bodyRef}>
        {isLoading && <Loading />}
        {popup.show && (
          <Popup
            popupText={popup.content}
            popupTextColor={popup.textColor}
            PopupBackgroundColor={popup.backgroundColor}
          />
        )}
        <Switch>
          <Route path='/' exact>
            {products.length !== 0 && (
              <div className='content'>
                <div className='first-section'>
                  <Navbar bodyRef={bodyRef} />
                  <HeroSecion
                    priceFormatter={priceFormatter}
                    product={products[0]}
                  />
                </div>
                <NewArrivals
                  priceFormatter={priceFormatter}
                  products={products}
                />
                <CtaSection />
                <ServicesSection />
                <BigDealSection
                  priceFormatter={priceFormatter}
                  product={products[3]}
                />
                <CustomerCommentsSection />
                <ContactInfoSection />
                <Footer />
              </div>
            )}
          </Route>
          <Route path='/shop'>
            <Navbar bodyRef={bodyRef} />
            <Shop
              products={products}
              priceFormatter={priceFormatter}
              onAddToCart={handleAddToCart}
              addingProduct={addingProduct}
            />
            <Footer />
          </Route>
          <Route exact path='/cart'>
            <Navbar bodyRef={bodyRef} />
            <Cart
              cart={cart}
              priceFormatter={priceFormatter}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
            <Footer />
          </Route>
          <Route exact path='/checkout'>
            <Navbar bodyRef={bodyRef} />
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              commerce={commerce}
            />
            <Footer />
          </Route>
          <Route exact path='/confirmation'>
            <Navbar bodyRef={bodyRef} />
            <ConfirmationPage />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
