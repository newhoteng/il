import React from 'react';
import styles from '../../styles/ProdView.module.css';

export default function OfferDetailsEdit() {
  return (
    <section className={`${styles.productOffer} ${styles.sectionContainers}`}>
      <h3>Offer Details</h3>
      <div className={styles.offers}>
        <p className="text-red-500 font-medium">Pending</p>
      </div>
    </section>
  );
}
