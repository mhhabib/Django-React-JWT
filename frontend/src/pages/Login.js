import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="w3-card-4 loginCard">
      <div className="w3-container w3-teal">
        <h2 style={{ textAlign: "center" }}>Login Here</h2>
      </div>
      <form className="w3-container" onSubmit={loginUser}>
        <p>
          <label className="w3-text-teal">
            <b>Username</b>
          </label>
          <input
            className="w3-input w3-border w3-sand"
            placeholder="Enter your username"
            name="username"
            type="text"
          />
        </p>
        <p>
          <label className="w3-text-teal">
            <b>Password</b>
          </label>
          <input
            className="w3-input w3-border w3-sand"
            placeholder="Enter Password"
            name="password"
            type="password"
          />
        </p>
        <p>
          <button className="w3-button w3-block w3-teal">Login</button>
        </p>
      </form>
    </div>
  );
};
export default Login;
