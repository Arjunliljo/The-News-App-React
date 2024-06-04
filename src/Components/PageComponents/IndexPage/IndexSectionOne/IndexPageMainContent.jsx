import Image from "../../UtilityComponents/Image";
import styles from "./IndexPageMainContent.module.css";
function IndexPageMainContent() {
  return (
    <article className={styles.article}>
      <Image
        height="70%"
        width="100%"
        src="https://cf-images.assettype.com/thecue%2F2024-04%2F032823fa-4c90-4d45-9386-e9bbb28389b8%2FWhatsApp_Image_2024_04_18_at_12_03_29_AM.jpeg?rect=0%2C0%2C1280%2C720&w=640&auto=format%2Ccompress&fit=max"
      />
      <h3
        className="thertiaryHeadings"
        style={{ fontSize: "2rem", lineHeight: "3rem" }}
      >
        നമ്മുടെ സൂപ്പർ താരങ്ങൾ പോലും സ്ഥിരതയുള്ള അവസ്ഥയിലല്ല: ധ്യാൻ ശ്രീനിവാസൻ
        അഭിമുഖം
      </h3>
    </article>
  );
}

export default IndexPageMainContent;
