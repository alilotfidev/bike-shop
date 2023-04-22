import { useState, useEffect } from 'react';
import '../css/Checkout.css';
import PaymentForm from './PaymentForm';
const Checkout = ({ cart, order, onCaptureCheckout, commerce }) => {
  const [checkoutFirstStep, setCheckoutFirstStep] = useState(true);
  const [checkoutToken, setCheckoutToken] = useState({});
  const [shippingData, setShippingData] = useState({});
  // Customer details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // Shipping details
  const [shippingName, setShippingName] = useState('');
  const [shippingStreet, setShippingStreet] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingStateProvinces, setShippingStateProvinces] = useState([]);
  const [shippingStateProvince, setShippingStateProvince] = useState('');
  const [shippingPostalZipCode, setShippingPostalZipCode] = useState('');
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState('');
  // Payment details
  // const [cardNum, setCardNum] = useState('');
  // const [expMonth, setExpMonth] = useState('');
  // const [expYear, setExpYear] = useState('');
  // const [ccv, setCcv] = useState('');
  // const [billingPostalZipcode, setBillingPostalZipcode] = useState('');
  // Shipping and fulfillment data
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  //countries
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisionsArray = Object.entries(shippingStateProvinces).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const shippingMethods = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - ${option.price.formatted_with_symbol}`,
  }));
  const fetchShippingCountries = async (checkoutTokenID) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenID
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingStateProvinces(subdivisions);
    setShippingStateProvince(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenID,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenID,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(Object.keys(options)[0]);
  };
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, []);
  useEffect(() => {
    if (checkoutToken.id) fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);
  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);
  useEffect(() => {
    if (shippingStateProvince)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingStateProvince
      );
  }, [shippingStateProvince]);
  const checkoutInfoSubmitHandler = (e) => {
    e.preventDefault();
    const fullShippingData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address1: shippingStreet,
      city: shippingCity,
      shippingSubdivision: shippingStateProvince,
      zip: shippingPostalZipCode,
      country: shippingCountry,
      shippingOption: shippingOption,
    };
    setShippingData(fullShippingData);
    setCheckoutFirstStep(false);
  };
  return (
    <div className='Checkout'>
      <div className='checkout-form-container'>
        <h3 className='shipping-info'>SHIPPING INFORMATION</h3>
        {checkoutFirstStep ? (
          <form
            className='checkout-form card'
            onSubmit={checkoutInfoSubmitHandler}
          >
            <div className='shipping-info-container'>
              <h3 className='address-title'>PLEASE SELECT YOUR ADDRESS</h3>

              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='firstName'>
                  First Name*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First Name'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='lastName'>
                  Last Name*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Last Name'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='email'>
                  Email*
                </label>
                <input
                  className='checkout-input'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='shippingName'>
                  Full Name*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='shippingName'
                  value={shippingName}
                  onChange={(e) => setShippingName(e.target.value)}
                  placeholder='Full Name'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='shippingStreet'>
                  Street Address*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='shippingStreet'
                  value={shippingStreet}
                  onChange={(e) => setShippingStreet(e.target.value)}
                  placeholder='Street Address'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='shippingCity'>
                  City*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='shippingCity'
                  value={shippingCity}
                  onChange={(e) => setShippingCity(e.target.value)}
                  placeholder='City'
                />
              </div>
              <div className='checkout-input-container'>
                <label
                  className='checkout-label'
                  htmlFor='shippingPostalZipCode'
                >
                  POSTAL/ZIP CODE*
                </label>
                <input
                  className='checkout-input'
                  type='text'
                  name='shippingPostalZipCode'
                  value={shippingPostalZipCode}
                  onChange={(e) => setShippingPostalZipCode(e.target.value)}
                  placeholder='POSTAL/ZIP CODE'
                />
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='shippingCountry'>
                  Country*
                </label>
                <select
                  className='checkout-select'
                  name='shippingCountry'
                  value={shippingCountry}
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='checkout-input-container'>
                <label
                  className='checkout-label'
                  htmlFor='shippingStateProvince'
                >
                  State/Province*
                </label>
                <select
                  className='checkout-select'
                  name='shippingStateProvince'
                  value={shippingStateProvince}
                  onChange={(e) => setShippingStateProvince(e.target.value)}
                >
                  {subdivisionsArray.map((subdivision) => (
                    <option key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='checkout-input-container'>
                <label className='checkout-label' htmlFor='shippingOption'>
                  Shipping Method
                </label>
                <select
                  className='checkout-select'
                  name='shippingOption'
                  value={shippingOption}
                  onChange={(e) => setShippingOption(e.target.value)}
                >
                  {shippingMethods.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className='checkout-submit' type='submit'>
              NEXT
            </button>
          </form>
        ) : (
          Object.keys(checkoutToken).length !== 0 && (
            <PaymentForm
              checkoutToken={checkoutToken}
              setCheckoutFirstStep={setCheckoutFirstStep}
              shippingData={shippingData}
              onCaptureCheckout={onCaptureCheckout}
            />
          )
        )}
        {/* payment form */}
      </div>
    </div>
  );
};

export default Checkout;
