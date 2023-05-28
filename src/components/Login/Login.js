import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [data, setData] = useState({ email: "", password: "" });
  const [formIsValid, setFormIsValid] = useState(false);

  const onChangerHandler = (e) => {
    setData({ ...data, email: e.target.value });
  };

  //  efek using clean

  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     console.log("cheking validity");
  //     setFormIsValid(
  //       data.password.trim().length > 6 && data.email.includes("@")
  //     );
  //   }, 500);

  //   return () => {
  //     clearTimeout(time);
  //     console.log("clean up");
  //   };
  // }, [data.email, data.password]);

  useEffect(() => {
    setFormIsValid(data.password.trim().length > 6 && data.email.includes("@"));
  }, [data.email, data.password]);

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(data.email, data.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={onChangerHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={onChangePassword}
            // onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
