import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import {
//   PiHouseSimpleLight, PiShareNetworkLight, PiCaretDownLight, PiCaretRightBold,
// } from 'react-icons/pi';
// import { SlPeople } from 'react-icons/sl';
import styles from '../styles/ProdView.module.css';
// import headerCSS from '../styles/Header.module.css';

// User profile component
export function UserProfile({
  profilePic, firstName, lastName, companyName,
}) {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.userImage} src={profilePic} alt="user" />
      <div className={styles.profileDetails}>
        <p className={styles.name}>{`${firstName} ${lastName}`}</p>
        <p className={styles.company}>{companyName}</p>
      </div>
    </div>
  );
}

// Icons in user profile component
export function ProfileIcons({ icon, text, optionalIcon }) {
  return (
    <div className={styles.profileIconCont}>
      {icon}
      <p className={styles.text}>{text}</p>
      {optionalIcon}
    </div>
  );
}

// Prop validations
UserProfile.propTypes = {
  profilePic: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

ProfileIcons.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  optionalIcon: PropTypes.element,
};

ProfileIcons.defaultProps = {
  optionalIcon: <></>,
};
