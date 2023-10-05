import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import {
  PiChatTeardropDotsLight, PiBellLight, PiCaretDownLight, PiMagnifyingGlassLight,
} from 'react-icons/pi';
import headerCSS from '../styles/Header.module.css';
// import styles from '../styles/ProdView.module.css';

function Header() {
  const { appConfData, isLoading, isError } = useSelector((store) => store.appConfData);
  const { productData } = useSelector((store) => store.productData);

  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '400',
  });

  return (
    <>
      {isError
        && (
        <header className={headerCSS.header}>Something went wrong, please reload the page.</header>
        )}

      {isLoading ? (
        <header className={headerCSS.header} style={{ color: '#aeadad' }}>Loading...</header>
      ) : (
        <header style={{ backgroundColor: `${appConfData.mainColor}` }}>
          <div className={headerCSS.header}>
            <img className={headerCSS.logo} src={appConfData.logo} alt="company logo" />
            <div className={headerCSS.search}>
              <input type="search" placeholder="Enter interests, keyword, company name, etc." />
              <PiMagnifyingGlassLight className={headerCSS.searchIcon} />
            </div>
            <nav className={headerCSS.nav}>
              <NavLink style={navLinkStyles} to="/">HOME</NavLink>
              <NavLink style={navLinkStyles} to="/product">PRODUCT</NavLink>
            </nav>
            <div className={headerCSS.menu}>
              <PiChatTeardropDotsLight className={headerCSS.menuIcons} />
              <div className={headerCSS.menuPair}>
                EN
                <PiCaretDownLight className={headerCSS.menuIcons} />
              </div>
              <PiBellLight className={headerCSS.menuIcons} />
              <div className={headerCSS.menuPair}>
                <img className={headerCSS.userImage} src={productData.user?.profilePicture} alt="user" />
                <PiCaretDownLight className={headerCSS.menuIcons} />
              </div>
            </div>
          </div>
        </header>
      )}
      <Outlet />
    </>
  );
}

export default Header;
