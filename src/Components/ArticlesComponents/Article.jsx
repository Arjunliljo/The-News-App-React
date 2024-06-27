import Main from "../PageComponents/UtilityComponents/Main";
import Image from "../PageComponents/UtilityComponents/Image";
import { useSearchParams } from "react-router-dom";
import styles from "./Article.module.css";
import Author from "../AuthorComponents/Author";
import NotFoundPage from "../PageComponents/UtilityComponents/NotFoundPage";
import { useSelector } from "react-redux";

function Article() {
  const { data } = useSelector((state) => state.dataSet);
  console.log(data);

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  if (!searchParams.get("id") || !data[id])
    return (
      <Main>
        <NotFoundPage></NotFoundPage>
      </Main>
    );

  const { image, description, authorImg } = data[id];

  return (
    <Main>
      <section className={styles.articleSection}>
        <div className="container">
          <div className={styles.imageAuthor}>
            <Image src={image} height="70%" width="100%" />
            <div>
              <Author data={data[id]} gap="3rem" size="150px">
                <Image src={authorImg} height="100%" width="100%" />
              </Author>
            </div>
          </div>
          <div className={styles.summery}>
            <h2>Summery</h2>
            {/* description */}
            <p>{description}</p>
          </div>
        </div>
      </section>
    </Main>
  );
}

export default Article;
