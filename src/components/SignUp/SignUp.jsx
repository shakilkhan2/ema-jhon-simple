import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError("Your password did not match!");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required placeholder="email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="password"
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="confirm password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
        <p id="new-to-ema-jhon">
          Already have an account?{" "}
          <Link to="/login">
            <span id="create-account"> Login</span>
          </Link>
        </p>
        <p className="text-error">
          <small>{error}</small>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
