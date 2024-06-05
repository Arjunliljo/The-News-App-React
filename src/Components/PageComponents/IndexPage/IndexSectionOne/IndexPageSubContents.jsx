import styles from "./IndexPageSubContents.module.css";

function IndexPageSubContents({ children: image, data }) {
  return (
    <article className={styles.article}>
      {image}

      <div className={styles.subContents}>
        <button className="btn-primary">{data.btnContent}</button>
        <h3 className="thertiaryHeadings">{data.heading}</h3>
        <span>{data.author}</span>
      </div>
    </article>
  );
}

export default IndexPageSubContents;
