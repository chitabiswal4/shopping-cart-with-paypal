import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Menu from '../../components/svg/bars-solid.svg'
import Close from '../../components/svg/times-solid.svg'
import Cart from '../../components/svg/cart.svg'
import {DataContext} from '../../components/DataProvider'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const value = useContext(DataContext)
  const [cart] = value.cart


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          SHOPY
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <img src={Close} alt="" width="30" /> :  <img src={Menu} alt="" width="30" />} 
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;