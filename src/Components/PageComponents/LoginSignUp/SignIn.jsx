import { useNavigate } from "react-router-dom";

import Button from "../UtilityComponents/Button";

import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsLogginPage,
  setIsSignInPage,
} from "../../../App/Login/LoginSlice";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const addUser = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = { email, password, userName };

    try {
      await axios.post(`${BASE_URL}/users`, data);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleLoginPage = (e) => {
    dispatch(setIsSignInPage(false));
    dispatch(setIsLogginPage(true));
    navigate("/login");
  };

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={addUser}>
        <div className={styles.row}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div>
          <Button type="primary" disabled={isLoading ? "disabled" : ""}>
            Sign up
          </Button>
        </div>
      </form>
      <div className={styles.signup}>
        <span>Already having Account ? </span>
        <Button onClick={handleLoginPage} type="secondary">
          Login
        </Button>
      </div>
    </main>
  );
}
