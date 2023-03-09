import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer-info'>
        <img
          src='/images/icons/footer-logo.svg'
          alt='Bike Max'
          className='footer-logo'
        />
        <h2 className='footer-subtitle'>
          Find Your
          <br />
          Next Bicycle
        </h2>
        <p className='footer-copyright'>2023 BikeMax. Allright reserved</p>
      </div>
      <div className='footer-links'>
        <div className='links-wrapper'>
          <div className='links-title'>Menu</div>
          <div className='footer-link'>Home</div>
          <div className='footer-link'>Catalog</div>
          <div className='footer-link'>Services</div>
          <div className='footer-link'>Promo</div>
        </div>
        <div className='links-wrapper'>
          <div className='links-title'>Categorie</div>
          <div className='footer-link'>Mountain bike</div>
          <div className='footer-link'>Road bike</div>
          <div className='footer-link'>Touring bike</div>
          <div className='footer-link'>Fixie bike</div>
        </div>
        <div className='links-wrapper'>
          <div className='links-title'>Services</div>
          <div className='footer-link'>Build up</div>
          <div className='footer-link'>Customize</div>
          <div className='footer-link'>Repaint</div>
          <div className='footer-link'>Rebuild</div>
        </div>
        <div className='links-wrapper'>
          <div className='links-title'>About Us</div>
          <div className='footer-link'>About us</div>
          <div className='footer-link'>Contact us</div>
          <div className='footer-link'>Online store</div>
          <div className='footer-link'>Social Media</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
