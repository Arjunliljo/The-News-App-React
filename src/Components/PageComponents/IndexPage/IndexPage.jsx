import Main from "../UtilityComponents/Main";
import SecondaryHeading from "../UtilityComponents/SecondaryHeading";
import IndexSectionOne from "./IndexSectionOne/IndexSectionOne";
import IndexSectionThree from "./IndexSectionThree/IndexSectionThree";
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
      <IndexSectionThree>
        <SecondaryHeading>The Cue Studio</SecondaryHeading>
      </IndexSectionThree>
    </Main>
  );
}

export default IndexPage;
