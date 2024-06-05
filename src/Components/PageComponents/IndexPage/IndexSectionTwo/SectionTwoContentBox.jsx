import styles from "./SectionTwoContentBox.module.css";
function SectionTwoContentBox({
  children: image,
  heading,
  author,
  btn = false,
  btnText = "Click me",
}) {
  return (
    <article className={styles.article}>
      {image}
      {btn && <button className="btn-primary">{btnText}</button>}
      <h3 className="thertiaryHeadings">{heading}</h3>
      <div>{author}</div>
    </article>
  );
}

export default SectionTwoContentBox;
