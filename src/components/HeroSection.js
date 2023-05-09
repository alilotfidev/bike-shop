import { useState } from 'react';
import '../css/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSecion = ({ priceFormatter, products }) => {
  const [productIndex, setProductIndex] = useState(0);
  const product = products[productIndex];
  const handleProductIndexChange = (direction) => {
    if (direction === 1 && productIndex < products.length - 1) {
      setProductIndex(productIndex + 1);
    } else if (direction === -1 && productIndex > 0) {
      setProductIndex(productIndex - 1);
    }
  };
  return (
    <div className='HeroSecion'>
      <div className='hero-section-description'>
        <h2 className='hero-section-title'>
          Find Your
          <br /> Next Bicycle
        </h2>
        <p className='hero-section-text'>
          Huge selection of goods and brands speaks in its favor. Good shops
          offer one-stop shopping for cycling acces­sories, spares and bike
          wear.
        </p>
        <button className='hero-section-cta btn orange-btn'>
          <Link to='/shop'>Explore now</Link>
        </button>
        <div className='hero-section-links'>
          <div className='hero-section-link'>
            <a
              href='https://www.instagram.com/focusbikes/'
              className='instagram-link'
            >
              Instagram
            </a>
          </div>
          <div className='hero-section-link'>
            <a href='https://twitter.com/FOCUSBikes' className='twitter-link'>
              Twitter
            </a>
          </div>
          <div className='hero-section-link'>
            <a
              href='https://www.facebook.com/FOCUSBikes'
              className='facebook-link'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className='hero-section-bicycle'>
        <div className='bicycle'>
          <img
            src={product.image.url}
            alt={product.name}
            className='bicycle-image'
          />
          <div className='bicycle-details'>
            <p className='bicycle-name'>
              <Link to='/shop'>{product.name} </Link>
            </p>

            <p className='bicycle-price'>
              {priceFormatter.format(product.price.raw)}
            </p>
          </div>
        </div>
        <div className='buttons-wrapper'>
          <div className='prev' onClick={() => handleProductIndexChange(-1)}>
            <img
              src='/images/icons/vector-prev.svg'
              alt='prev bike'
              className='prev-vector'
            />
            <p className='prev-text'>Prev</p>
          </div>
          <div className='next' onClick={() => handleProductIndexChange(1)}>
            <p className='next-text'>Next</p>
            <img
              src='/images/icons/vector-next.svg'
              alt='next bike'
              className='next-vector'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecion;
