import React from 'react';
import { useSelector } from 'react-redux';
import {
  PiHouseSimpleLight, PiShareNetworkLight, PiCaretDownLight,
} from 'react-icons/pi';
import { SlPeople } from 'react-icons/sl';
import styles from '../styles/ProdView.module.css';
import { ProfileIcons, UserProfile } from './UserProfile';

export default function AsideUserInfo() {
  const { productData } = useSelector((store) => store.productData);

  return (
    <aside className={styles.aside}>
      <UserProfile
        profilePic={productData.user?.profilePicture}
        firstName={productData.user?.firstName}
        lastName={productData.user?.lastName}
        companyName={productData.company?.name}
      />
      <ProfileIcons icon={<PiHouseSimpleLight />} text="Home" />
      <ProfileIcons icon={<SlPeople />} text="Members" />
      <ProfileIcons icon={<PiShareNetworkLight />} text="Organizations" optionalIcon={<PiCaretDownLight />} />
    </aside>
  );
}
