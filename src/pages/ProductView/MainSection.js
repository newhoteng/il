import React from 'react';
import { useSelector } from 'react-redux';
import { PiLaptopLight } from 'react-icons/pi';
import styles from '../../styles/ProdView.module.css';
import MainUserInfo from '../../components/MainUserInfo';

export default function MainSection() {
  const { appConfData } = useSelector((store) => store.appConfData);
  const { productData, isLoading, isError } = useSelector((store) => store.productData);

  return (
    <>
      {isError
        && (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>
          Something went wrong, please reload the page.
        </section>
        )}

      {isLoading ? (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productDetails} ${styles.sectionContainers}`}>
          <div className={styles.product}>
            <img className={styles.productImage} src={productData.picture} alt="loftOS" />
            <span className={styles.category}>
              <PiLaptopLight className={styles.softwareIcon} style={{ backgroundColor: `${appConfData?.mainColor}` }} />
              {productData.type.name}
            </span>
            <h3>{productData.name}</h3>
            <p>{productData.description}</p>
          </div>
          <MainUserInfo />
        </section>
      )}
    </>
  );
}
