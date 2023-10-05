import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';

export default function VideoSection() {
  const { productData, isLoading, isError } = useSelector((store) => store.productData);
  return (
    <>
      {isError
        && (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>Something went wrong, please reload the page.</section>
        )}

      {isLoading ? (
        <section className={`${styles.loading} ${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productVideo} ${styles.sectionContainers}`}>
          <h3>Video</h3>
          <div className={styles.videoFixer}>
            <div className={styles.vidCont}>
              <iframe
                src={productData.video.replace('watch?v=', 'embed/')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Rick"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
