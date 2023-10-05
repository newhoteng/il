import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';
import AsideUserInfo from '../../components/AsideUserInfo';
import BreadCrumbsEdit from '../../components/BreadcrumbsEdit';
import MainSectionEdit from './MainSectionEdit';
import VideoSectionEdit from './VideoSectionEdit';
import OfferDetailsEdit from './OfferDetailsEdit';

export default function ProductEditPage() {
  const { appConfData } = useSelector((store) => store.appConfData);

  return (
    <main className={styles.mainContainer}>
      {appConfData.hasUserSection
        && (
          <AsideUserInfo />
        )}
      <section className={styles.mainSection}>
        <BreadCrumbsEdit />
        <MainSectionEdit />
        <VideoSectionEdit />
        <OfferDetailsEdit />
      </section>
    </main>
  );
}
