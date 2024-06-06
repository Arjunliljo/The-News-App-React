import Image from "../PageComponents/UtilityComponents/Image";
import styles from "./Author.module.css";

function Author({
  data,
  author = "someone",
  height = "100%",
  width = "100%",
  children = <Image height="100%" width="100%" />,
  size = "200px",
  gap = "3rem",
}) {
  console.log(data);
  return (
    <article className={styles.authorContainer} style={{ height, width, gap }}>
      <div className={styles.imgBox} style={{ height: size, width: size }}>
        {children}
      </div>

      <div>
        <p>Author :-</p>
        <h3>{data?.author}</h3>
      </div>
    </article>
  );
}

export default Author;
