import Image from "../../UtilityComponents/Image";
import IndexPageMainContent from "./IndexPageMainContent";
import styles from "./IndexSectionOne.module.css";
import IndexPageSubContents from "./IndexPageSubContents";

function IndexSectionOne({ children, info }) {
  return (
    <section className={styles.indexSectionOne}>
      <div className="container">
        {children}
        <div className={styles.grid}>
          <IndexPageMainContent info={info}>
            <Image height="70%" width="100%" src={info[0].image} />
          </IndexPageMainContent>

          {info.map((data, i) => {
            return (
              <IndexPageSubContents data={data} key={data.id}>
                <Image height="100%" width="100%" src={data.image} />
              </IndexPageSubContents>
            );
          })}
        </div>
      </div>
      <button className="section-btn">Read More</button>
    </section>
  );
}

export default IndexSectionOne;
