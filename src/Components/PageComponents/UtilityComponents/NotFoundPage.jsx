import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <Link to="/" style={styles.link}>
        {" "}
        Go to Homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    padding: "0 20px",
  },
  header: {
    fontSize: "10vw",
    margin: "0",
    color: "#ff6b6b",
  },
  message: {
    fontSize: "2vw",
    margin: "10px 0",
    color: "#333",
  },
  link: {
    fontSize: "1.5vw",
    color: "#3498db",
    textDecoration: "none",
    marginTop: "20px",
  },
};

export default NotFoundPage;
