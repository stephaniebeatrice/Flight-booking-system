import React, { useState } from "react";
import "./auth.css";
import { Button } from "react-bootstrap";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Perform login logic here
    console.log(loginData);
    const res = await fetch(`http://localhost:4000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loginData.email, password: loginData.password }),
    });

    const data = await res.json();
    if (data.message) {
      // dispatch(authActions.login({ email }));
      return; // navigation("/");
    }
    setMsg(data.error);
  };
  console.log("==========================MESSAGE======================================");
  console.log(msg);

  return (
    <div className="form">
      <div className="form-body">
        <div className="email">
          <label className="form__label" for="email">
            Email
          </label>
          <input name="email" type="email" className="form__input" value={loginData.email} onChange={e => handleChange(e)} placeholder="Email" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            value={loginData.password}
            onChange={e => handleChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <Button onClick={handleSubmit} type="submit" class="btn">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
