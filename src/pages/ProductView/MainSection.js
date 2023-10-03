import React from 'react';
import { useSelector } from 'react-redux';
import { PiLaptopLight, PiMapPinLight } from 'react-icons/pi';
import styles from '../../styles/ProdView.module.css';
import headerCSS from '../../styles/Header.module.css';
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
            <h3>Offered By</h3>
            <img className={headerCSS.logo} src={appConfData?.logo} alt="company logo" />
            <UserProfile
              scale={0.75}
              profilePic={productData.user.profilePicture}
              firstName={productData.user.firstName}
              lastName={productData.user.lastName}
              companyName={productData.company.name}
            />
            <div>
              <PiMapPinLight />
              <p>
                {street}
                <br />
                {city}
              </p>
            </div>
            <div>
              Google Map
            </div>
          </div>
        </section>
      )}
    </>
  );
}
