import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate("from");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required placeholder="email" />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p id="new-to-ema-jhon">
          New to Ema-john?{" "}
          <Link to="/sign-up">
            <span id="create-account"> Create New Account</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
