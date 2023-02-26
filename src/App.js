import BigDealSection from './components/BigDealSection';
import CtaSection from './components/CtaSection';
import HeroSecion from './components/HeroSection';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import ServicesSection from './components/ServicesSection';

function App() {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <div className='App'>
      <div className='first-section'>
        <Navbar />
        <HeroSecion priceFormatter={priceFormatter} />
      </div>
      <NewArrivals priceFormatter={priceFormatter} />
      <CtaSection />
      <ServicesSection />
      <BigDealSection priceFormatter={priceFormatter} />
    </div>
  );
}

export default App;
