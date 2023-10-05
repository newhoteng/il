import React, { useState } from 'react';
import styles from '../../styles/ProdView.module.css';

export default function VideoSectionEdit() {
  const [video, setVideo] = useState('');

  return (
    <section className={`${styles.videoInputCont} ${styles.sectionContainers}`}>
      <h3>Video</h3>
      <input className={styles.videoInput} type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Add a youtube or vineo link" />
    </section>
  );
}
