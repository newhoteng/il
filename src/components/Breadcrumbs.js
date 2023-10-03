import { PiHouseSimpleLight, PiCaretRightBold } from 'react-icons/pi';
import styles from '../styles/ProdView.module.css';

export default function BreadCrumbs() {
  const { appConfData } = useSelector((store) => store.appConfData);

  return (
    <div className={styles.header}>
      <div className={styles.breadcrumbs}>
        <PiHouseSimpleLight />
        <PiCaretRightBold />
        <span>Offers</span>
        <PiCaretRightBold />
        <span>Product Title</span>
      </div>
      <button type="button" className={styles.btn} style={{ backgroundColor: `${appConfData?.mainColor}` }}>Edit</button>
    </div>
  );
}