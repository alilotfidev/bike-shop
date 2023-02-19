import '../css/Navbar.css';
const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul className='nav-links'>
        <li className='nav-link active'>Home</li>
        <li className='nav-link'>Catalog</li>
        <li className='nav-link'>Services</li>
        <li className='nav-link'>Promo</li>
      </ul>
      <h2 className='nav-logo'>BikeMax</h2>
      <form className='nav-search'>
        <input
          type='text'
          className='nav-search-input'
          placeholder='Search here'
        />
        <button className='nav-search-button'>Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
