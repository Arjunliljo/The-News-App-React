import { Link } from "react-router-dom";
import styles from "./IndexPageMainContent.module.css";

function IndexPageMainContent({ children: image, info }) {
  return (
    <article className={styles.article}>
      <Link to={`article?id=${info[0].id}`}>
        <div className={styles.subContents}>
          {image}
          <button className="btn-primary">{info[0].btnContent}</button>
          <h3
            className="thertiaryHeadings"
            style={{ fontSize: "2rem", lineHeight: "3rem" }}
          >
            {info[0].heading}
          </h3>
        </div>
      </Link>
      <span className={styles.author}>{info[0].author}</span>
    </article>
  );
}

export default IndexPageMainContent;
