import '../css/HeroSection.css';

const HeroSecion = ({ priceFormatter }) => {
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
        <button className='hero-section-cta btn orange-btn'>Explore now</button>
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
            src='/images/ATLAS-6.8.png'
            alt='ATLAS 6.8'
            className='bicycle-image'
          />
          <div className='bicycle-details'>
            <p className='bicycle-name'>ATLAS 6.8</p>
            <p className='bicycle-price'>{priceFormatter.format(2399)}</p>
          </div>
        </div>
        <div className='buttons-wrapper'>
          <div className='prev'>
            <img
              src='/images/vector-prev.svg'
              alt='prev bike'
              className='prev-vector'
            />
            <p className='prev-text'>Prev</p>
          </div>
          <div className='next'>
            <p className='next-text'>Next</p>
            <img
              src='/images/vector-next.svg'
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
