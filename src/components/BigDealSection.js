import '../css/BigDealSection.css';
const BigDealSection = ({ priceFormatter }) => {
  return (
    <div className='BigDealSection'>
      <div className='deal-info'>
        <div className='deal-info-title'>
          <img src='/images/icons/discount.svg' alt='Super Big Deals' />
          <p>Super Big Deals</p>
        </div>
        <div className='deal-info-description'>
          Get up to 20%
          <br /> for all Mountain
          <br /> Bikes Series
        </div>
      </div>
      <div className='big-deal-section-product'>
        <img
          src='/images/ATLAS-6.8.png'
          alt='ATLAS 6.8'
          className='big-deal-section-product-image'
        />
        <div className='bicycle-info'>
          <h4 className='bicycle-name'>ATLAS 6.8</h4>
          <p className='bicycle-price'>{priceFormatter.format(2399)}</p>
        </div>
      </div>
    </div>
  );
};

export default BigDealSection;
