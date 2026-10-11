import styles from "./SiteLogo.module.scss";
const SiteLogo = () => {
  return (
    <div className={styles.website_logo}>
      <img src="./favicon.png" alt="logo" />
      <p>FinTrack</p>
    </div>
  );
};

export default SiteLogo;
