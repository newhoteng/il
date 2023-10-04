import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';

export default function OfferDetails() {
  const { productData, isLoading, isError } = useSelector((store) => store.productData);
  console.log(productData);
  return (
    <>
      {isError && <p>Something went wrong, please reload the page.</p>}

      {isLoading ? (
        <section className={`${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productVideo} ${styles.sectionContainers}`}>
          <h3>Offer Details</h3>
          <div>
            Details
          </div>
        </section>
      )}
    </>
  );
}
