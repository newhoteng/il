import { Outlet, NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  const navLinkStyles = ({ isActive }) => ({
    opacity: isActive ? '1' : '0.5',
  });

  return (
    <>
      <nav className={`${styles.nav} ${styles.flexContainer}`}>
        <ul className={styles.flexContainer}>
          <li>Bookstore CMS</li>
          <li><NavLink style={navLinkStyles} to="/">BOOKS</NavLink></li>
          <li><NavLink style={navLinkStyles} to="/categories">CATEGORIES</NavLink></li>
        </ul>
        <div className={`${styles.profile} ${styles.flexContainer}`}><ImUser className={styles.userIcon} /></div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
