import '../css/BigDealSection.css';
const BigDealSection = ({ priceFormatter, product }) => {
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
          src={product.image.url}
          alt={product.name}
          className='big-deal-section-product-image'
        />
        <div className='bicycle-info'>
          <h4 className='bicycle-name'>{product.name}</h4>
          <p className='bicycle-price'>
            {priceFormatter.format(product.price.raw)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigDealSection;
