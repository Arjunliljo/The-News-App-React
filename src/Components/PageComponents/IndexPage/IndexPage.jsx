import Main from "../UtilityComponents/Main";
import SecondaryHeading from "../UtilityComponents/SecondaryHeading";
import IndexSectionOne from "./IndexSectionOne/IndexSectionOne";
import IndexSectionTwo from "./IndexSectionTwo/IndexSectionTwo";

function IndexPage() {
  return (
    <Main>
      <IndexSectionOne>
        <SecondaryHeading>Happening</SecondaryHeading>
      </IndexSectionOne>
      <IndexSectionTwo>
        <SecondaryHeading>Conversation With Maneesh Narayan</SecondaryHeading>
      </IndexSectionTwo>
    </Main>
  );
}

export default IndexPage;
