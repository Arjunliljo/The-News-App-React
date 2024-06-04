import IndexPageMainContent from "./IndexPageMainContent";
import styles from "./IndexSectionOne.module.css";

function IndexSectionOne({ children }) {
  return (
    <section className={styles.indexSectionOne}>
      <div className="container">
        {children}
        <div className={styles.grid}>
          <IndexPageMainContent></IndexPageMainContent>
        </div>
      </div>
    </section>
  );
}

export default IndexSectionOne;
