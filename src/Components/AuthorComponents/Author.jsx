import styles from "./Author.module.css";

function Author({
  data,
  height = "100%",
  width = "100%",
  children,
  size,
  gap = "3rem",
}) {
  return (
    <article className={styles.authorContainer} style={{ height, width, gap }}>
      <div className={styles.imgBox} style={{ height: size, width: size }}>
        {children}
      </div>

      <div>
        <p>Author :-</p>
        <h3>{data.author}</h3>
      </div>
    </article>
  );
}

export default Author;
