import PropTypes from 'prop-types';
import styles from '../styles/ProdView.module.css';

export default function OfferType({ icon, title, options = [] }) {
  const items = options.map((option) => (
    <div key={option} className={styles.offerItem}>{option}</div>
  ));

  return (
    <div className={styles.offerCont}>
      <div>{icon}</div>
      <div className={styles.textCont}>
        <p>{title}</p>
        <div>{items}</div>
      </div>
    </div>
  );
}

// Prop validations
OfferType.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
