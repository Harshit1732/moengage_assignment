import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/auth/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          // console.log(res.status,"res........................................")
          if (res.status == 200) {
            navigate("/login");
          } else {
            console.log("Error while signing up");
          }
        });
    } catch (e) {}

    console.log(e);
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
