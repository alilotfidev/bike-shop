import '../css/CustomerCommentsSection.css';
const CustomerCommentsSection = () => {
  // TODO: changing active comment
  return (
    <div className='CustomerCommentsSection'>
      <h2 className='comments-section-title'>
        What Our Lovely User
        <br /> Are Saying About Us
      </h2>
      <div className='comments'>
        <div className='comment active'>
          <p className='comment-icon'>“</p>
          <p className='comment-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <div className='comment-author'>
            <div className='comment-author-image'>
              <img src='/images/customer-1.jpg' alt='customer 1' />
            </div>
            <div className='comment-author-info'>
              <p className='comment-author-name'>Yuni Metronom</p>
              <p className='comment-author-company'>BiketoBike Founder</p>
            </div>
          </div>
        </div>
        <div className='comment'>
          <p className='comment-icon'>“</p>
          <p className='comment-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut t, consectetur a
          </p>
          <div className='comment-author'>
            <div className='comment-author-image'>
              <img src='/images/customer-2.jpg' alt='customer 2' />
            </div>
            <div className='comment-author-info'>
              <p className='comment-author-name'>Sky Nurbianto</p>
              <p className='comment-author-company'>BikersGanteng Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCommentsSection;
