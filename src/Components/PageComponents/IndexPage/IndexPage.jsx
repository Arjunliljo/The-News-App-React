import Main from "../UtilityComponents/Main";
import SecondaryHeading from "../UtilityComponents/SecondaryHeading";
import IndexSectionOne from "./IndexSectionOne/IndexSectionOne";
import IndexSectionThree from "./IndexSectionThree/IndexSectionThree";
import IndexSectionTwo from "./IndexSectionTwo/IndexSectionTwo";
import { useSelector } from "react-redux";

function IndexPage() {
  const { data: datas } = useSelector((state) => state.dataSet);

  return (
    <Main>
      <IndexSectionOne info={datas.slice(0, 4)}>
        <SecondaryHeading>Happening</SecondaryHeading>
      </IndexSectionOne>
      <IndexSectionTwo info={datas.slice(4, 7)}>
        <SecondaryHeading>Conversation With Maneesh Narayan</SecondaryHeading>
      </IndexSectionTwo>
      {/* <IndexSectionThree info={datas.slice(8, 16)}>
        <SecondaryHeading>The Cue Studio</SecondaryHeading>
      </IndexSectionThree> */}
    </Main>
  );
}

export default IndexPage;
