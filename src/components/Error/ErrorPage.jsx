import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>
        404|There is nothing you search for...{" "}
        <span>
          <Link to="/">
            <small>Home</small>
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default ErrorPage;
