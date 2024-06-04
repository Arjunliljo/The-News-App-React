import Footer from "./Components/PageComponents/Footer";
import Header from "./Components/PageComponents/Header";

function App({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;
