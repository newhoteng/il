import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import {
  PiChatTeardropDotsLight, PiBellLight, PiCaretDownLight, PiMagnifyingGlassLight,
} from 'react-icons/pi';
import { fetchAppConf } from '../redux/appConfSlice';
import profileImage from '../images/HT2-cropped.jpg';
import headerCSS from '../styles/Header.module.css';

function Header() {
  const { appConfData } = useSelector((store) => store.appConfData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppConf());
  }, [dispatch]);

  // Style for active link
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '400',
  });

  return (
    <>
      <header className={headerCSS.header} style={{ backgroundColor: `${appConfData.mainColor}` }}>
        <img className={headerCSS.logo} src={appConfData.logo} alt="user" />
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
            <img className={headerCSS.userImage} src={profileImage} alt="user" />
            <PiCaretDownLight className={headerCSS.menuIcons} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
