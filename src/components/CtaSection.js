import '../css/CtaSection.css';

const CtaSection = () => {
  return (
    <div className='CtaSection'>
      <div className='cta-section-image-wrapper'>
        <img
          src='/images/BIKE-RIDERS.JPG'
          alt='FOCUS BIKES'
          className='cta-section-image'
        />
      </div>
      <div className='cta-section-content'>
        <h2 className='cta-section-title'>The Best Bicycling Experience</h2>
        <p className='cta-section-description'>
          Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo
          mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum
          metus, eu tincidunt felis ligula in turpis.
        </p>
        <button className='cta-section-button btn orange-btn'>
          Explore now
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
