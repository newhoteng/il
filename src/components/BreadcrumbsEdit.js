import { useSelector } from 'react-redux';
import styles from '../styles/ProdView.module.css';

export default function BreadCrumbs() {
  // const { appConfData } = useSelector((store) => store.appConfData);
  const { productData } = useSelector((store) => store.productData);

  return (
    <div className={styles.header}>
      <div className={styles.breadcrumbs}>
        <span>{productData?.name}</span>
      </div>
      <button type="button" className={`${styles.btn} bg-primary`}>View Offer</button>
    </div>
  );
}
