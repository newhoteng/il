import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  PiHouseSimpleLight, PiShareNetworkLight, PiCaretDownLight, PiCaretRightBold,
} from 'react-icons/pi';
import { SlPeople } from 'react-icons/sl';
import profileImage from '../images/HT2-cropped.jpg';
import styles from '../styles/ProdView.module.css';

export function UserProfile() {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.userImage} src={profileImage} alt="user" />
      <div className={styles.profileDetails}>
        <p className={styles.name}>Harriet Oteng</p>
        <p className={styles.company}>Innoloft GmbH</p>
      </div>
    </div>
  );
}

function ProfileIcons({ icon, text, optionalIcon }) {
  return (
    <div className={styles.profileIconCont}>
      {icon}
      <p className={styles.text}>{text}</p>
      {optionalIcon}
    </div>
  );
}

export default function ProductView() {
  const { appConfData } = useSelector((store) => store.appConfData);

  return (
    <main className={styles.mainContainer}>
      {appConfData.hasUserSection
        && (
          <aside className={styles.aside}>
            <UserProfile />
            <ProfileIcons icon={<PiHouseSimpleLight />} text="Home" />
            <ProfileIcons icon={<SlPeople />} text="Members" />
            <ProfileIcons icon={<PiShareNetworkLight />} text="Organizations" optionalIcon={<PiCaretDownLight />} />
          </aside>
        )}
      <section className={styles.mainSection}>
        <div className={styles.header}>
          <div className={styles.breadcrumbs}>
            <PiHouseSimpleLight />
            <PiCaretRightBold />
            <span>Offers</span>
            <PiCaretRightBold />
            <span>Product Title</span>
          </div>
          <button type="button" className={styles.btn} style={{ backgroundColor: `${appConfData.mainColor}` }}>Edit</button>
        </div>
        Main
      </section>
    </main>
  );
}

// Prop validations
ProfileIcons.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  optionalIcon: PropTypes.element,
};

ProfileIcons.defaultProps = {
  optionalIcon: <></>,
};
