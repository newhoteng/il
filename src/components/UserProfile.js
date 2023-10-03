import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProdView.module.css';

// User profile component
export function UserProfile({
  profilePic, firstName, lastName, companyName, scale, origin,
}) {
  const resizeStyle = {
    transform: `scale(${scale})`,
    transformOrigin: `${origin}`,
  };
  return (
    <div className={styles.profileContainer} style={resizeStyle}>
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
  scale: PropTypes.number,
  origin: PropTypes.string,
};

UserProfile.defaultProps = {
  scale: 1,
  origin: 'top left',
};

ProfileIcons.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  optionalIcon: PropTypes.element,
};

ProfileIcons.defaultProps = {
  optionalIcon: <></>,
};
