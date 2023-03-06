import { useEffect, useRef, useState } from 'react';

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

// commerce instance
import commerce from './lib/commerce';
import Loading from './components/Loading';

function App() {
  // products states
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  useEffect(() => {
    fetchProducts();
  }, []);

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  const bodyRef = useRef();
  return (
    <div className='App' ref={bodyRef}>
      {isLoading && <Loading />}
      {products.length !== 0 && (
        <div className='content'>
          <div className='first-section'>
            <Navbar bodyRef={bodyRef} />
            <HeroSecion priceFormatter={priceFormatter} product={products[0]} />
          </div>
          <NewArrivals priceFormatter={priceFormatter} products={products} />
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
    </div>
  );
}

export default App;
