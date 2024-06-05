import Main from "../PageComponents/UtilityComponents/Main";
import Image from "../PageComponents/UtilityComponents/Image";
import { useSearchParams } from "react-router-dom";
import information from "../../Data/Informations";

const data = information();

function Article() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  const { image } = data[id];

  return (
    <Main>
      {" "}
      <Image src={image} />
    </Main>
  );
}

export default Article;
