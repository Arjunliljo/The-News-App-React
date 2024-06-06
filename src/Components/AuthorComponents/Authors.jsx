import data from "../../Data/Informations";
import Image from "../PageComponents/UtilityComponents/Image";
import Author from "./Author";
import styles from "./Authors.module.css";

function Authors() {
  const unique = new Set();

  const authors = data().reduce((acc, obj) => {
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
    <section className={styles.authorsSection}>
      <div className="container">
        <div className={styles.grid}>
          {authors.map((obj, i) => (
            <Author data={authors[i]} key={authors.id} size="100px">
              <Image src={obj.authorImg} height="100%" width="100%" />
            </Author>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Authors;
