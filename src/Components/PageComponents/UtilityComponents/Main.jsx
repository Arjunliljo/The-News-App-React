import styles from "./Main.module.css";

function Main({ children, className }) {
  return <main className={styles[className]}>{children}</main>;
}

export default Main;
