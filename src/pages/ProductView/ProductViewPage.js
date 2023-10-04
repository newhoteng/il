import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';
import AsideUserInfo from '../../components/AsideUserInfo';
import BreadCrumbs from '../../components/Breadcrumbs';
import MainSection from './MainSection';
import VideoSection from './VideoSection';
import OfferDetails from './OfferDetails';

export default function ProductView() {
  const { appConfData } = useSelector((store) => store.appConfData);

  return (
    <main className={styles.mainContainer}>
      {appConfData.hasUserSection
        && (
          <AsideUserInfo />
        )}
      <section className={styles.mainSection}>
        <BreadCrumbs />
        <MainSection />
        <VideoSection />
        <OfferDetails />
      </section>
    </main>
  );
}
