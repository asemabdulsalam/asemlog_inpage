import React, { useState } from "react";
import "./Signin.css";
import s from "../images/Signin.jpg"

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const validateCredentials = (username, password) => {
    // Example hardcoded credentials for demo purposes
    const validUsername = "user123";
    const validPassword = "password123";

    return username === validUsername && password === validPassword;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateCredentials(username, password)) {
      alert("Login Successful");
      // Redirect to another page or perform other actions here
      // Example: window.location.href = "/dashboard";
    } else {
      setErrorMessage(true);
    }
  };

  const handleInputChange = () => {
    if (errorMessage) {
      setErrorMessage(false);
    }
  };

  return (
    <div>
      <div className="image" id="jj">
        <img src={s} alt="Top Image" />
      </div>
      <div className="login-container">
        <h2>SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleInputChange();
            }}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            required
          />
          <div className="options">
            <label>
              <input type="checkbox" id="remember-me" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p id="error-message">Invalid username or password</p>}
      </div>
    </div>
  );
};

export default Signin;
