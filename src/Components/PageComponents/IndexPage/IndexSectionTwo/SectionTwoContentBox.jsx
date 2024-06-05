import styles from "./SectionTwoContentBox.module.css";
function SectionTwoContentBox({ children: image, heading, author }) {
  return (
    <article className={styles.article}>
      {image}
      <h3 className="thertiaryHeadings">{heading}</h3>
      <div>{author}</div>
    </article>
  );
}

export default SectionTwoContentBox;
