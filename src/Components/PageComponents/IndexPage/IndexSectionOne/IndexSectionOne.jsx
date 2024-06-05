import Image from "../../UtilityComponents/Image";
import IndexPageMainContent from "./IndexPageMainContent";
import styles from "./IndexSectionOne.module.css";
import IndexPageSubContents from "./IndexPageSubContents";

function IndexSectionOne({ children }) {
  return (
    <section className={styles.indexSectionOne}>
      <div className="container">
        {children}
        <div className={styles.grid}>
          <IndexPageMainContent>
            <Image
              height="70%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </IndexPageMainContent>
          <IndexPageSubContents
            heading="കോണ്‍ഗ്രസ് മുക്ത കേരളത്തിന് ശ്രമിച്ച പിണറായിയുടെ ദുഷ്പ്രചരണത്തിന് കിട്ടിയ തിരിച്ചടി"
            btnContent="Around Us"
            author="വി.ഡി.സതീശന്‍ 2 hours ago 1 min read"
          >
            <Image
              height="100%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </IndexPageSubContents>
          <IndexPageSubContents
            heading="കോണ്‍ഗ്രസ് മുക്ത കേരളത്തിന് ശ്രമിച്ച പിണറായിയുടെ ദുഷ്പ്രചരണത്തിന് കിട്ടിയ തിരിച്ചടി"
            btnContent="Around Us"
            author="വി.ഡി.സതീശന്‍ 2 hours ago 1 min read"
          >
            <Image
              height="100%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </IndexPageSubContents>
          <IndexPageSubContents
            heading="കോണ്‍ഗ്രസ് മുക്ത കേരളത്തിന് ശ്രമിച്ച പിണറായിയുടെ ദുഷ്പ്രചരണത്തിന് കിട്ടിയ തിരിച്ചടി"
            btnContent="Around Us"
            author="വി.ഡി.സതീശന്‍ 2 hours ago 1 min read"
          >
            <Image
              height="100%"
              width="100%"
              src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
            />
          </IndexPageSubContents>
        </div>
      </div>
    </section>
  );
}

export default IndexSectionOne;
