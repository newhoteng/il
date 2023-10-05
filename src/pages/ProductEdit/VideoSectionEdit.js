import React from 'react';
import styles from '../../styles/ProdView.module.css';

export default function VideoSectionEdit() {
  return (
    <section className={`${styles.videoInputCont} ${styles.sectionContainers}`}>
      <h3>Video</h3>
      <input className={styles.videoInput} type="text" placeholder="Add a youtube or vineo link" />
    </section>
  );
}
