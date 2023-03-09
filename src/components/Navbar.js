import '../css/Navbar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ bodyRef }) => {
  const [showMenu, setShoeMenu] = useState(false);
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.position = showMenu ? 'fixed' : '';
    }
  }, [showMenu, bodyRef]);
  return (
    <nav className='Navbar'>
      <h2 className='nav-logo'>
        <Link to='/'>BikeMax</Link>
      </h2>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <div
          className='close-menu'
          onClick={() => {
            setShoeMenu(false);
          }}
        >
          Close menu
        </div>
        <li className='nav-link active'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link to='/shop'>Shop</Link>
        </li>
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
