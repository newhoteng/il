import { Outlet, NavLink } from 'react-router-dom';
import { CiSearch, CiLocationOn } from 'react-icons/ci';
import {
  PiChatTeardropDotsThin, PiChatTeardropDotsLight, PiBellThin, PiHouseSimpleThin,
  PiShareNetworkThin,
} from 'react-icons/pi';
import { BsChevronDown } from 'react-icons/bs';
import { SlPeople } from 'react-icons/sl';
import headerCSS from '../styles/Header.module.css';

function Header() {
  return (
    <>
      <header>
        <PiHouseSimpleThin />
        <CiLocationOn />
        <PiChatTeardropDotsThin />
        <PiChatTeardropDotsLight />
        <BsChevronDown />
        <PiBellThin />
        <SlPeople />
        <PiShareNetworkThin />
        <h1>LOGO</h1>
        <div>
          <input type="search" placeholder="Enter interests, keyword, company name, etc." />
          <CiSearch className={headerCSS.search} />
        </div>
        <nav>
          <NavLink to="/">MAIN</NavLink>
          <NavLink to="/product">PRODUCT</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
