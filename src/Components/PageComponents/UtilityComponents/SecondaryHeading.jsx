import styles from "./SecondaryHeading.module.css";

function SecondaryHeading({ children }) {
  return <h2 className={styles.secondaryHeading}>{children}</h2>;
}

export default SecondaryHeading;
