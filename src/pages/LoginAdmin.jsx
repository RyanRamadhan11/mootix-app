

  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { loginCustomer } from "../store/customerSlice";
  import { useLocation, useNavigate } from "react-router-dom";
  import { loginAdmin,  selectLoading } from "../store/adminSlice";
  import { Link } from 'react-router-dom';
  import Logo1 from '../assets/images/cinema1.png';

  import Loading from '../components/Loading'; // Import your loading component
  
  
  function LoginAdmin() {
    // const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(selectLoading);
  
    const handleLogin = async () => {
      try {
        if (location.pathname.startsWith("/")) {
          await dispatch(loginAdmin(email, password));
        } else if (location.pathname.startsWith("/login/customer")) {
          await dispatch(loginCustomer(email, password));
        }
  
        // Jika login berhasil, baru navigasi ke "/home"
        navigate('/home');
      } catch (error) {
        console.error("Login failed:", error);
        // Handle error, if needed
      }
    };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <section className="nav" style={{ backgroundColor: '', padding: '0.5em' }}>
      <div className="container" style={{padding: '2em'}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-12">
            <div className="card" style={{ borderRadius: '1rem', marginLeft: '7em' }}>
              <div className="row container-fluid">
                <div className="col-md-6 col-lg-6 d-none d-md-block py-5 px-5">
                  <img src={Logo1} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', paddingTop: '2em' }} />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x mx-4" style={{ color: 'black' }}></i>
                        <span className="h1 fw-bold mb-3">Mootix App</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
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
                        <a href="#!" className="text-decoration-none" style={{color: 'blue'}}>
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

                      <p className=" pb-lg-2" style={{ color: '#393f81', paddingTop: '1.5em' }}>
                          Don't have an account ? 
                        <Link to="/register/admin" className="mx-2" style={{color: 'blue'}}>
                          Register Admin here
                        </Link>
                      </p>

                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          You Are Customer ? 
                        <Link to="/login/customer" className="mx-2" style={{color: 'blue'}}>
                          Login Customer Here
                        </Link>
                      </p>
                      <Link to="#!" className="small text-muted">Terms of use. </Link>
                      <Link to="#!" className="small text-muted">Privacy policy</Link>
                    </form>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      </>
  );
}

export default LoginAdmin;
