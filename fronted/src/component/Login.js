import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });

    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
