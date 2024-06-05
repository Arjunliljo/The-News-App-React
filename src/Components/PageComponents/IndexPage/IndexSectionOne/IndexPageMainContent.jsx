import styles from "./IndexPageMainContent.module.css";
function IndexPageMainContent({ children: image }) {
  return (
    <article className={styles.article}>
      {image}
      <h3
        className="thertiaryHeadings"
        style={{ fontSize: "2rem", lineHeight: "3rem", marginTop: "2rem" }}
      >
        നമ്മുടെ സൂപ്പർ താരങ്ങൾ പോലും സ്ഥിരതയുള്ള അവസ്ഥയിലല്ല: ധ്യാൻ ശ്രീനിവാസൻ
        അഭിമുഖം
      </h3>
    </article>
  );
}

export default IndexPageMainContent;
