import { useSelector } from "react-redux";
import Image from "../PageComponents/UtilityComponents/Image";
import Main from "../PageComponents/UtilityComponents/Main";
import Author from "./Author";
import styles from "./Authors.module.css";

function Authors() {
  const unique = new Set();
  const { data } = useSelector((state) => state.dataSet);

  const authors = data.reduce((acc, obj) => {
    if (!unique.has(obj.author)) {
      acc.push({
        author: obj.author,
        authorImg: obj.authorImg,
        id: obj.id,
      });
      unique.add(obj.author);
    }
    return acc;
  }, []);

  return (
    <Main>
      <section className={styles.authorsSection}>
        <div className="container">
          <div className={styles.grid}>
            {authors.map((obj, i) => (
              <Author data={authors[i]} key={i} size="100px">
                <Image src={obj.authorImg} height="100%" width="100%" />
              </Author>
            ))}
          </div>
        </div>
      </section>
    </Main>
  );
}

export default Authors;
