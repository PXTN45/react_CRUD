/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const sign_in = () => {
  const [signin, setSignin] = useState({
    Username: "",
    Password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handelChange = (e) => {
    setSignin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setSignin({
      Username: "",
      Password: "",
    });
    setError(false);
  };
  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header"> Sign In </h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name"> Username </label>
                <input
                  type="text"
                  className="form-control"
                  name="Username"
                  placeholder="Username"
                  onChange={handelChange}
                  value={signin.Username}
                />
                <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  placeholder="Password"
                  onChange={handelChange}
                  value={signin.Password}
                />
                <button type="button" className="btn btn-success m-3 ">
                  sign in
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sign_in;
