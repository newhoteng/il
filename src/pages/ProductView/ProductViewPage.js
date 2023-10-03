import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';
import AsideUserInfo from '../../components/AsideUserInfo';
import BreadCrumbs from '../../components/Breadcrumbs';
import MainSection from './MainSection';
import VideoSection from './VideoSection';

export default function ProductView() {
  const { appConfData } = useSelector((store) => store.appConfData);
  const { productData, isLoading, isError } = useSelector((store) => store.productData);
  console.log(productData, isLoading, isError);

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
        <div className={styles.productDetails}>
          Offer Details
        </div>
      </section>
    </main>
  );
}
