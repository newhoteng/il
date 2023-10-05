import React from 'react';
import { useSelector } from 'react-redux';
import { PiClockCountdownLight, PiGearSixLight } from 'react-icons/pi';
import { CiBag1 } from 'react-icons/ci';
import { LiaChessKnightSolid } from 'react-icons/lia';
import styles from '../../styles/ProdView.module.css';
import OfferType from '../../components/OfferType';

export default function OfferDetails() {
  const { productData, isLoading, isError } = useSelector((store) => store.productData);

  const categories = productData.categories?.map((category) => (
    category.name
  ));

  const businessModels = productData.businessModels?.map((model) => (
    model.name
  ));

  return (
    <>
      {isError
        && (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>Something went wrong, please reload the page.</section>
        )}

      {isLoading ? (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productOffer} ${styles.sectionContainers}`}>
          <h3>Offer Details</h3>
          <div className={styles.offers}>
            <OfferType icon={<PiGearSixLight className={styles.offerIcon} />} title="Categories" options={categories} />
            <OfferType icon={<LiaChessKnightSolid className={styles.offerIcon} />} title="Business Model" options={businessModels} />
            <OfferType icon={<PiClockCountdownLight className={styles.offerIcon} />} title="TRL" options={[productData.trl.name.split('(')[0]]} />
            <OfferType icon={<CiBag1 className={styles.offerIcon} />} title="Investment Effort" options={[productData.investmentEffort]} />
          </div>
        </section>
      )}
    </>
  );
}
