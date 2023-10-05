import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PiLaptopLight, PiTrashLight, PiCheckBold } from 'react-icons/pi';
import styles from '../../styles/ProdView.module.css';
import MainUserInfo from '../../components/MainUserInfo';

export default function MainSectionEdit() {
  const { appConfData } = useSelector((store) => store.appConfData);

  const location = useLocation();
  const data = location.state?.productInfo;

  const [description, setDescription] = useState(data.desc);
  const [title, setTitle] = useState(data.name);

  return (
    <section className={`${styles.productDetails} ${styles.sectionContainers}`}>
      <div className={styles.product}>
        <img className={styles.productImage} src={data.image} alt="loftOS" />
        <span className={styles.category}>
          <PiLaptopLight className={styles.softwareIcon} style={{ backgroundColor: `${appConfData?.mainColor}` }} />
          {data.type}
        </span>
        <PiTrashLight className={`${styles.trashIcon}`} />
        <h3><input name="name" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className={styles.videoInput} /></h3>
        <div>
          <ReactQuill theme="snow" value={description} className={styles.richEdit} onChange={setDescription} />
        </div>
        <div className={styles.editBtnCont}>
          <button type="button">Cancel</button>
          <button type="button" className="bg-primary-50 text-white">
            <PiCheckBold />
            Save
          </button>
        </div>
      </div>
      <MainUserInfo />
    </section>
  );
}
// className={styles.saveBtn}
