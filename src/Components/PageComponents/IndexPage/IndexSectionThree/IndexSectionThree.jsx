import { Link } from "react-router-dom";
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
            <Link key={data.id} to={`article?id=${data.id}`}>
              <SectionTwoContentBox
                heading={data.heading}
                author={data.author}
                btn={true}
                btnText="Find Out More"
              >
                <div className={styles.imgBox}>
                  <Image src={data.image} />
                </div>
              </SectionTwoContentBox>
            </Link>
          ))}
        </div>
      </div>
      <button className="section-btn">Read More</button>
    </section>
  );
}

export default IndexSectionThree;
