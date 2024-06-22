import styles from "./Button.module.css";
function Button({ type, children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} ${styles[disabled]}`}
    >
      {children}
    </button>
  );
}

export default Button;
