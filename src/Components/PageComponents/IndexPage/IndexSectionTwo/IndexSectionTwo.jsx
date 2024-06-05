import Image from "../../UtilityComponents/Image";
import styles from "./IndexSectionTwo.module.css";
import SectionTwoContentBox from "./SectionTwoContentBox";

function IndexSectionTwo({ children: heading }) {
  return (
    <section className={styles.sectionTwo}>
      <div className="container">
        {heading}
        <div className={styles.articlesContainer}>
          <SectionTwoContentBox
            heading="അഭിനയം ഓവറായാൽ ഗിരീഷേട്ടൻ പറയും, പ്രേമലു തെലുങ്കിൽ കിട്ടിയ സ്വീകാര്യത അപ്രതീക്ഷിതം: നസ്ലൻ അഭിമുഖം"
            author="മനീഷ് നാരായണന്‍"
          >
            <Image
              height="60%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2Ffed6d28e-5758-48c4-80a1-b8d6b24b3f2a%2FWhatsApp_Image_2024_04_21_at_10_16_14_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </SectionTwoContentBox>
          <SectionTwoContentBox
            heading="നമ്മുടെ സൂപ്പർ താരങ്ങൾ പോലും സ്ഥിരതയുള്ള അവസ്ഥയിലല്ല: ധ്യാൻ ശ്രീനിവാസൻ അഭിമുഖം"
            author="മനീഷ് നാരായണന്‍"
          >
            <Image
              height="60%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </SectionTwoContentBox>
          <SectionTwoContentBox
            heading="പൃഥ്വിരാജിന്റെ ന​ഗ്നനായ സീൻ നജീബിന്റെ സ്വാതന്ത്ര്യം വിശദീകരിക്കാൻ, ബ്ലെസി അഭിമുഖം
            മനീഷ് നാരായണന്‍"
            author="മനീഷ് നാരായണന്‍"
          >
            <Image
              height="60%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-03%2F5703196c-2fda-4286-907d-d253e8c51e74%2Fblessy_00_43_44_03_still003.jpg?rect=0%2C0%2C1920%2C1080&w=640&auto=format%2Ccompress&fit=max"
            />
          </SectionTwoContentBox>
        </div>
      </div>
    </section>
  );
}

export default IndexSectionTwo;
