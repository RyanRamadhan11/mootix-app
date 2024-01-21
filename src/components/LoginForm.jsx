import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../store/customerSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAdmin } from "../store/adminSlice";

import Loading from './Loading'; // Import your loading component

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const handleLogin = () => {
    setLoading(true);

    if (location.pathname.startsWith("/login/admin")) {
      dispatch(loginAdmin(email, password));
    } else if (location.pathname.startsWith("/login/customer")) {
      dispatch(loginCustomer(email, password));
    }

    // Simulate an asynchronous action (API call, etc.)
    setTimeout(() => {
      // After some time, navigate to the home page
      navigate('/');
    }, 3000); // Adjust the time as needed

    // navigate("/");
    // alert("Login successful!");

  };

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
    <form>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>

      <div className="mb-3">
        <a href="#!" className="text-decoration-none">
          Forgot password?
        </a>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block mb-3"
        onClick={handleLogin}
      >
        Sign in
      </button>
    </form>
    )}
    </>
  );
}

export default LoginForm;
