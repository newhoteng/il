import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PiLaptopLight, PiTrashLight, PiCheckBold } from 'react-icons/pi';
import styles from '../../styles/ProdView.module.css';
import MainUserInfo from '../../components/MainUserInfo';

export default function MainSectionEdit() {
  const { appConfData } = useSelector((store) => store.appConfData);

  const location = useLocation();
  const data = location.state?.productInfo;

  return (
    <section className={`${styles.productDetails} ${styles.sectionContainers}`}>
      <div className={styles.product}>
        <img className={styles.productImage} src={data.image} alt="loftOS" />
        <span>
          <PiLaptopLight className={styles.softwareIcon} style={{ backgroundColor: `${appConfData?.mainColor}` }} />
          {data.type}
        </span>
        <PiTrashLight className={`${styles.trashIcon}`} />
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
        <div className={styles.editBtnCont}>
          <button type="button">Cancel</button>
          <button type="button" className={styles.saveBtn}>
            <PiCheckBold />
            Save
          </button>
        </div>
      </div>
      <MainUserInfo />
    </section>
  );
}
