import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button style={styles.button} type="submit">
          Submit
        </button>
      </form>
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
    padding: "20px",
  },
  header: {
    fontSize: "6vw",
    margin: "0",
    color: "#ff6b6b",
  },
  form: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formGroup: {
    width: "100%",
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "1rem",
    color: "#333",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
    resize: "vertical",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  "@media (max-width: 600px)": {
    container: {
      padding: "10px",
    },
    header: {
      fontSize: "8vw",
    },
    form: {
      width: "100%",
      padding: "0 10px",
    },
    button: {
      width: "100%",
    },
  },
  "@media (max-width: 400px)": {
    header: {
      fontSize: "10vw",
    },
    label: {
      fontSize: "0.9rem",
    },
    input: {
      fontSize: "0.9rem",
    },
    textarea: {
      fontSize: "0.9rem",
    },
    button: {
      fontSize: "0.9rem",
    },
  },
};

export default ContactUsPage;
