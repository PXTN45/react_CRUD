/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const sign_up = () => {
  const [signup, setSignup] = useState({
    Username: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handelChange = (e) => {
    setSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setSignup({
      Username: "",
      Email: "",
      Password: "",
      Confirm_Password: "",
    });
    setError(false);
  };
  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header"> Sign Up </h5>
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
                  value={signup.Username}
                />
                <label htmlFor="name"> Email </label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  placeholder="Email"
                  onChange={handelChange}
                  value={signup.Email}
                />
                <label htmlFor="name"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  placeholder="Password"
                  onChange={handelChange}
                  value={signup.Password}
                />
                <label htmlFor="name"> Confirm Password </label>
                <input
                  type="password"
                  className="form-control"
                  name="Confirm_Password"
                  placeholder="Confirm_Password"
                  onChange={handelChange}
                  value={signup.Confirm_Password}
                />
                <button type="button" className="btn btn-success m-3">
                  sign up
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

export default sign_up;
