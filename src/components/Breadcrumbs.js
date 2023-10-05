import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PiHouseSimpleLight, PiCaretRightBold } from 'react-icons/pi';
import styles from '../styles/ProdView.module.css';

export default function BreadCrumbs() {
  const { appConfData } = useSelector((store) => store.appConfData);
  const { productData, isLoading } = useSelector((store) => store.productData);

  const necessaryData = {
    image: productData?.picture,
    type: productData.type?.name,
    name: productData?.name,
    desc: productData?.description,
  };

  return (
    <>
      {!isLoading && (
        <div className={styles.header}>
          <div className={styles.breadcrumbs}>
            <PiHouseSimpleLight />
            <PiCaretRightBold />
            <span>Offers</span>
            <PiCaretRightBold />
            <span>{productData?.name}</span>
          </div>
          <Link to="/product/edit" state={{ productInfo: necessaryData }}>
            <button type="button" className={styles.btn} style={{ backgroundColor: `${appConfData?.mainColor}` }}>Edit</button>
          </Link>
        </div>
      )}
    </>
  );
}
