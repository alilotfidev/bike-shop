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
      <div className='first-section'>
        <Navbar bodyRef={bodyRef} />
        <HeroSecion priceFormatter={priceFormatter} />
      </div>
      <NewArrivals priceFormatter={priceFormatter} />
      <CtaSection />
      <ServicesSection />
      <BigDealSection priceFormatter={priceFormatter} />
      <CustomerCommentsSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
}

export default App;
