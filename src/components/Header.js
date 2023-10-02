import { Outlet, NavLink } from 'react-router-dom';
import {
  PiChatTeardropDotsLight, PiBellLight,
  PiCaretDownLight, PiMagnifyingGlassLight,
} from 'react-icons/pi';
import profileImage from '../images/HT2-cropped.jpg';
import headerCSS from '../styles/Header.module.css';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? '700' : '400',
  });

  return (
    <>
      <header className={headerCSS.header}>
        <p>LOGO</p>
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
