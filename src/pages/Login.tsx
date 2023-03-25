import React, { useState } from "react";
import classes from "./Login.module.css";
import IMAGE from "../assets/loginImage.svg";
import LOGO from "../assets/logoAndName.svg";
import FullGreenButton from "../components/FullGreenButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const logInHandler = () => {
    navigate("/dashboard/users");
  };

  return (
    <div className={classes.container}>
      <section className={classes.img__container}>
        <img
          src={LOGO}
          alt="Lendsqr Logo"
          className={classes.logo__and__name}
        />
        <img src={IMAGE} alt="Login Illustration" />
      </section>
      <section className={classes.login__ui}>
        <header className={classes.header}>
          <h1>Welcome!</h1>
          <h2>Enter Details to Login</h2>
        </header>
        <form className={classes.form}>
          <input
            type={"email"}
            placeholder="Email"
            name="Email"
            required
            className={classes.email__input}
          />
          <div className={classes.input__container}>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              SHOW
            </button>
          </div>
          <button type="button" className={classes.forgot__password}>
            FORGOT PASSWORD?
          </button>
          <FullGreenButton buttonFunction={logInHandler}>
            <span className={classes.button__text}>LOG IN</span>
          </FullGreenButton>
        </form>
      </section>
    </div>
  );
};

export default Login;
