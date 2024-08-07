import Image from "../../UtilityComponents/Image";
import IndexPageMainContent from "./IndexPageMainContent";
import styles from "./IndexSectionOne.module.css";
import IndexPageSubContents from "./IndexPageSubContents";
import { Link } from "react-router-dom";

function IndexSectionOne({ children, info }) {
  console.log(info, "from secitonONe");
  return (
    <section className={styles.indexSectionOne}>
      <div className="container">
        {children}
        <div className={styles.grid}>
          <IndexPageMainContent info={info}>
            <Image height="70%" width="100%" src={info[0].image} />
          </IndexPageMainContent>

          <div className={styles.subContents}>
            {info.map((data, i) => {
              if (i === 0) return;
              return (
                <Link to={`article?id=${data.id}`} key={data.id}>
                  <IndexPageSubContents data={data}>
                    <Image height="100%" width="100%" src={data.image} />
                  </IndexPageSubContents>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <button className="section-btn">Read More</button>
    </section>
  );
}

export default IndexSectionOne;
