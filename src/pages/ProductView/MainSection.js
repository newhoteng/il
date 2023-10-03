
import styles from '../styles/ProdView.module.css';
import headerCSS from '../styles/Header.module.css';

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.productDetails}>
        <div>
          <img className={styles.userImage} src={productData.picture} alt="user" />
          <span>{productData.type?.name}</span>
          <h3>{productData.name}</h3>
          <p>{productData.description}</p>
        </div>
        <div>
          <p>Offered By</p>
          <img className={headerCSS.logo} src={appConfData.logo} alt="company logo" />
          <UserProfile
            profilePic={productData.user.profilePicture}
            firstName={productData.user.firstName}
            lastName={productData.user.lastName}
            companyName={productData.company.name}
          />
        </div>
      </div>
    </section>
  );
}