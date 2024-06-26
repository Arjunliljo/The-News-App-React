import { useSearchParams } from "react-router-dom";
import Main from "../PageComponents/UtilityComponents/Main";
import styles from "./AuthorPage.module.css";
import Image from "../PageComponents/UtilityComponents/Image";
import Author from "./Author";
import { useSelector } from "react-redux";

function AuthorPage() {
  const { authors } = useSelector((state) => state.dataSet);

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const info = authors.find((author) => author._id === id);

  return (
    <Main>
      <section className={styles.section}>
        <div className="container">
          <Author
            height="100%"
            width="100%"
            size="40rem"
            data={info}
            gap="10rem"
            disbled={true}
            className={styles.author}
          >
            <Image src={info.authorImg} />
          </Author>
        </div>
      </section>
    </Main>
  );
}

export default AuthorPage;
