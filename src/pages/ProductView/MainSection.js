import React from 'react';
import { useSelector } from 'react-redux';
import { PiLaptopLight, PiMapPinLight } from 'react-icons/pi';
import styles from '../../styles/ProdView.module.css';
import { UserProfile } from '../../components/UserProfile';

export default function MainSection() {
  const { appConfData } = useSelector((store) => store.appConfData);
  const { productData, isLoading, isError } = useSelector((store) => store.productData);

  let street = null;
  let city = null;

  if (!isLoading) {
    street = `${productData.company.address.street} ${productData.company.address.house},`;
    city = `${productData.company.address.zipCode} ${productData.company.address.city.name}, ${productData.company.address.country.name}`;
  }

  return (
    <>
      {isError && <p>Something went wrong, please reload the page.</p>}

      {isLoading ? (
        <section className={`${styles.productDetails} ${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productDetails} ${styles.sectionContainers}`}>
          <div className={styles.product}>
            <img className={styles.productImage} src={productData.picture} alt="loftOS" />
            <span>
              <PiLaptopLight className={styles.softwareIcon} style={{ backgroundColor: `${appConfData?.mainColor}` }} />
              {productData.type.name}
            </span>
            <h3>{productData.name}</h3>
            <p>{productData.description}</p>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.text}>
              <h3>Offered By</h3>
              <img className={styles.logo} src={productData.company.logo} alt="company logo" />
              <UserProfile
                scale={0.75}
                profilePic={productData.user.profilePicture}
                firstName={productData.user.firstName}
                lastName={productData.user.lastName}
                companyName={productData.company.name}
              />
              <div className={styles.addressCont}>
                <PiMapPinLight className={styles.addressIcon} />
                <p>
                  {street}
                  <br />
                  {city}
                </p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7809344896227!2d6.097925576553697!3d50.77963437165691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sgh!4v1696415137968!5m2!1sen!2sgh"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="company location map"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
