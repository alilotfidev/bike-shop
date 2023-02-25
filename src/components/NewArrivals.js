import '../css/NewArrivals.css';
const NewArrivals = ({ priceFormatter }) => {
  return (
    <div className='NewArrivals'>
      <h2 className='new-arrivals-title'>
        Discover
        <br />
        Our New Arrivals
      </h2>
      <div className='arrivlas-product-list'>
        <div className='arrivals-product'>
          <img
            src='/images/ATLAS-6.7-EQP.png'
            alt='ATLAS 6.7 EQP'
            className='arrivals-product-image'
          />
          <p className='bicycle-name'>ATLAS 6.7 EQP</p>
          <p className='bicycle-price'>{priceFormatter.format(2099)}</p>
        </div>
        <div className='arrivals-product'>
          <img
            src='/images/ATLAS-6.8.png'
            alt='ATLAS 6.8'
            className='arrivals-product-image'
          />
          <p className='bicycle-name'>ATLAS 6.8</p>
          <p className='bicycle-price'>{priceFormatter.format(2399)}</p>
        </div>
        <div className='arrivals-product'>
          <img
            src='/images/ATLAS-6.7.png'
            alt='ATLAS 6.7'
            className='arrivals-product-image'
          />
          <p className='bicycle-name'>ATLAS 6.7</p>
          <p className='bicycle-price'>{priceFormatter.format(1899)}</p>
        </div>
        <div className='arrivals-product'>
          <img
            src='/images/ATLAS-6.8-EQP.png'
            alt='ATLAS 6.8 EQP'
            className='arrivals-product-image'
          />
          <p className='bicycle-name'>ATLAS 6.8 EQP</p>
          <p className='bicycle-price'>{priceFormatter.format(1699)}</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
