import '../css/ServicesSection.css';

const ServicesSection = () => {
  return (
    <div className='ServicesSection'>
      <h2 className='services-section-title'>
        Our Special
        <br /> Services For You
      </h2>
      <div className='services'>
        <div className='service'>
          <div className='service-image'>
            <img src='/images/icons/services-1.svg' alt='Tune-ups & builds' />
            <h4 className='service-title'>Tune-ups & builds</h4>
            <p className='service-description'>
              We have all the necessary parts to create a bike that fits you
              perfectly
            </p>
          </div>
        </div>
        <div className='service'>
          <div className='service-image'>
            <img src='/images/icons/services-2.svg' alt='Customize Parts' />
            <h4 className='service-title'>Customize Parts</h4>
            <p className='service-description'>
              Aftermarket bicycle parts allow you to customize your machine the
              way you like.
            </p>
          </div>
        </div>
        <div className='service'>
          <div className='service-image'>
            <img src='/images/icons/services-3.svg' alt='Free delivery' />
            <h4 className='service-title'>Free delivery</h4>
            <p className='service-description'>
              Choose a bike at our shop and get free delivery to any location in
              the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
