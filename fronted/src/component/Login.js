import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    }).then((res)=>{
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        if (res.status == 200) {
          navigate("/Home");
        } else {
          console.log("Error while Logging in");
        }
    });
   
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
