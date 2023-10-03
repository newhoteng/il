import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/ProdView.module.css';

export default function VideoSection() {
  const { productData, isLoading, isError } = useSelector((store) => store.productData);
  return (
    <>
      {isError && <p>Something went wrong, please reload the page.</p>}

      {isLoading ? (
        <section className={`${styles.sectionContainers}`}>Loading...</section>
      ) : (
        <section className={`${styles.productVideo} ${styles.sectionContainers}`}>
          <h3>Video</h3>
          <div>
            <iframe
              src={productData.video.replace('watch?v=', 'embed/')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Rick"
            />
          </div>
        </section>
      )}
    </>
  );
}
