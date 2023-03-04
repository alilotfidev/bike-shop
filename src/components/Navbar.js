import { useEffect, useState } from 'react';
import '../css/Navbar.css';
const Navbar = ({ bodyRef }) => {
  const [showMenu, setShoeMenu] = useState(false);
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.position = showMenu ? 'fixed' : '';
    }
  }, [showMenu, bodyRef]);
  return (
    <nav className='Navbar'>
      <h2 className='nav-logo'>BikeMax</h2>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <div
          className='close-menu'
          onClick={() => {
            setShoeMenu(false);
          }}
        >
          Close menu
        </div>
        <li className='nav-link active'>Home</li>
        <li className='nav-link'>Catalog</li>
        <li className='nav-link'>Services</li>
        <li className='nav-link'>Promo</li>
      </ul>
      <img
        src='/images/icons/responsive-menu.svg'
        alt='show menu'
        className='show-menu'
        onClick={() => {
          setShoeMenu(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
