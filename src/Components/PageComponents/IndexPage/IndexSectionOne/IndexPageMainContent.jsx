import styles from "./IndexPageMainContent.module.css";
function IndexPageMainContent({ children: image }) {
  return (
    <article className={styles.article}>
      {image}
      <button className="btn-primary">Details</button>
      <h3
        className="thertiaryHeadings"
        style={{ fontSize: "2rem", lineHeight: "3rem" }}
      >
        നമ്മുടെ സൂപ്പർ താരങ്ങൾ പോലും സ്ഥിരതയുള്ള അവസ്ഥയിലല്ല: ധ്യാൻ ശ്രീനിവാസൻ
        അഭിമുഖം
      </h3>
      <span className={styles.author}>
        വി.ഡി.സതീശന്‍ 2 hours ago 1 min read
      </span>
    </article>
  );
}

export default IndexPageMainContent;
