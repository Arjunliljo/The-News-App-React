import { useNavigate } from "react-router-dom";

import Button from "../UtilityComponents/Button";
import styles from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsLoggedIn,
  setIsLogginPage,
  setIsSignInPage,
} from "../../../App/Login/LoginSlice";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

export default function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { userName, password };

    try {
      await axios.post(`${BASE_URL}/auth/login`, data);
      dispatch(setIsLoggedIn(true));
      navigate("/articles");
    } catch (error) {
      setError("invalid username or password");
      dispatch(setIsLoggedIn(false));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = (e) => {
    dispatch(setIsSignInPage(true));
    dispatch(setIsLogginPage(false));
    navigate("/SignIn");
  };

  const navigate = useNavigate("");

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={login}>
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
            Login
          </Button>
        </div>
      </form>
      <div className={styles.signup}>
        <span>Create an account ? </span>
        <Button type="secondary" onClick={handleSignIn}>
          Sign in
        </Button>
      </div>
    </main>
  );
}
