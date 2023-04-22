import '../css/Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = ({ bodyRef }) => {
  const [showMenu, setShoeMenu] = useState(false);
  const history = useHistory();
  const pathName = history.location.pathname;
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
        <li className={`nav-link ${pathName === '/' ? 'active' : ''}`}>
          <Link to='/'>Home</Link>
        </li>
        <li className={`nav-link ${pathName === '/shop' ? 'active' : ''}`}>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className='nav-link'>Services</li>
        <li className={`nav-link ${pathName === '/cart' ? 'active' : ''}`}>
          <Link to='/cart'>Cart</Link>
        </li>
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
