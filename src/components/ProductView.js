import React from 'react';
import { useSelector } from 'react-redux';
import { PiHouseSimpleLight, PiShareNetworkLight, PiCaretDownLight } from 'react-icons/pi';
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
    <div>
      {icon}
      <p>{text}</p>
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
            <ProfileIcons icon={<PiHouseSimpleLight />} text="Home" optionalIcon="" />
            <ProfileIcons icon={<SlPeople />} text="Members" optionalIcon="" />
            <ProfileIcons icon={<PiShareNetworkLight />} text="Organizations" optionalIcon={<PiCaretDownLight />} />
          </aside>
        )}
      <section className={styles.mainSection}>Main</section>
    </main>
  );
}
