import '../css/ContactInfoSection.css';
const ContactInfoSection = () => {
  return (
    <div className='ContactInfoSection'>
      <h2 className='contact-info-title'>
        First Time Here?
        <br /> Contact Us For Any Inquires
      </h2>
      <div className='contact-info-wrapper'>
        <div className='contact-info'>
          <div className='contact-info-icon'>
            <img src='/images/icons/call.svg' alt='call' />
          </div>
          <div className='contact-info-content'>
            <h4>Call</h4>
            <p>+49123456321789</p>
          </div>
        </div>
        <div className='contact-info'>
          <div className='contact-info-icon'>
            <img src='/images/icons/email.svg' alt='email' />
          </div>
          <div className='contact-info-content'>
            <h4>Email</h4>
            <p>loremipsum@gmail.com</p>
          </div>
        </div>
        <div className='contact-info'>
          <div className='contact-info-icon'>
            <img src='/images/icons/location.svg' alt='location' />
          </div>
          <div className='contact-info-content'>
            <h4>Location</h4>
            <p>Cloppenburg, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
