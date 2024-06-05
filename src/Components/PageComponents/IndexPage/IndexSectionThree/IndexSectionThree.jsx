import Image from "../../UtilityComponents/Image";
import SectionTwoContentBox from "../IndexSectionTwo/SectionTwoContentBox";
import styles from "./IndexSectionThree.module.css";

function IndexSectionThree({ children: heading, info }) {
  return (
    <section className="section">
      <div className="container">
        {heading}
        <div className={styles.articleContainer}>
          {info.map((data) => (
            <SectionTwoContentBox
              heading={data.heading}
              author={data.author}
              btn={true}
              btnText="Find Out More"
              key={data.id}
            >
              <Image height="60%" width="100%" src={data.image} />
            </SectionTwoContentBox>
          ))}
        </div>
      </div>
      <button className="section-btn">Read More</button>
    </section>
  );
}

export default IndexSectionThree;
