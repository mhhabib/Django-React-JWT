import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { username, logoutUser } = useContext(AuthContext);
  return (
    <Fragment>
      {/* <Link to="/">Home</Link>
      <span> | </span>
      {username ? (
        <p
          onClick={logoutUser}
          style={{ cursor: "pointer", fontWeight: "500" }}
        >
          Logout
        </p>
      ) : (
        <Link to="/login">Login</Link>
      )} */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          {username && <p className="nav-link">Hello, {username.username}!</p>}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {username ? (
          <li className="nav-item">
            <p
              className="nav-link"
              onClick={logoutUser}
              style={{ cursor: "pointer", fontWeight: "500" }}
            >
              Logout
            </p>
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </Fragment>
  );
};
export default Header;
