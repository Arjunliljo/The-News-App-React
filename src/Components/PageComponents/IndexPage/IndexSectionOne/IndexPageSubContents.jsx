import styles from "./IndexPageSubContents.module.css";

function IndexPageSubContents({
  children: image,
  heading,
  description,
  author,
  btnContent,
}) {
  return (
    <article className={styles.article}>
      {image}

      <div className={styles.subContents}>
        <button className="btn-primary">{btnContent}</button>
        <h3 className="thertiaryHeadings">{heading}</h3>
        <span>{author}</span>
      </div>
    </article>
  );
}

export default IndexPageSubContents;
