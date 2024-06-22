import { Link } from "react-router-dom";
import Image from "../../UtilityComponents/Image";
import styles from "./IndexSectionTwo.module.css";
import SectionTwoContentBox from "./SectionTwoContentBox";

function IndexSectionTwo({ children: heading, info }) {
  return (
    <section className={styles.sectionTwo}>
      <div className="container">
        {heading}
        <div className={styles.articlesContainer}>
          {info.map((data, i) => {
            return (
              <Link to={`article?id=${data.id}`} key={data.id}>
                <SectionTwoContentBox
                  heading={data.heading}
                  author={data.author}
                  btn={true}
                  btnText={data.btnContent}
                  key={data.id}
                >
                  <Image height="230px" width="100%" src={data.image} />
                </SectionTwoContentBox>
              </Link>
            );
          })}
        </div>
      </div>
      <button className="section-btn">Read More</button>
    </section>
  );
}

export default IndexSectionTwo;
