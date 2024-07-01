import { Link } from "react-router-dom";
import Image from "../PageComponents/UtilityComponents/Image";
import styles from "./Author.module.css";

function Author({
  data,
  height = "100%",
  width = "100%",
  children = <Image height="100%" width="100%" />,
  size = "200px",
  gap = "3rem",
  disbled = false,
  className,
}) {
  return (
    <Link
      to={
        !disbled
          ? `/authors/author?id=${data?._id}`
          : `https://en.wikipedia.org/wiki/${data?.author}`
      }
    >
      <article
        className={`${styles.authorContainer} ${className}`}
        style={{ height, width, gap }}
      >
        <div className={styles.imgBox} style={{ height: size, width: size }}>
          {children}
        </div>

        <div>
          <p>Author :-</p>
          <button className="btn-primary">Author</button>
          <h3>{data?.author}</h3>
        </div>
      </article>
    </Link>
  );
}

export default Author;
