import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="website logo named ama-jhon" />
      </Link>
      <div>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
        {/* <NavLink to="/sign-up">Sign Up</NavLink> */}
        {user && (
          <span className="text-white">
            Welcome, {user.email}{" "}
            <button onClick={handleLogOut}>Log out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
