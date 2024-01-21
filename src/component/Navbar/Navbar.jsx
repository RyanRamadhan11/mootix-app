import React from "react";
import Logo from "../../assets/images/movies.png";
import "../../App.css";
import { Link, useNavigate } from 'react-router-dom'; 
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/authSlice";
import Swal from 'sweetalert2'; // Import SweetAlert
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function Navbar() {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const username = useSelector((state) => state.authentication.username);
  const role = useSelector((state) => state.authentication.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Hapus data dari localStorage
        localStorage.removeItem('adminData');
        localStorage.removeItem('isLoggedIn');

        localStorage.removeItem('customerData');
        localStorage.removeItem('isLoggedIn');

        dispatch(setAuthenticated(false));
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful!',
          text: 'You have been logged out.',
          showConfirmButton: true,
          timer: 2000
        }).then(() => {
          navigate("/"); 
        });
      }
    });
  };

  return (
    <header className="site-header">
      <div className="row container-fluid d-flex justify-content-between">
        <div className="col-md-6 logo-container" >
          <Link to="/home" id="branding">
            <img style={{ width: '70px', height: '80px', paddingBottom: '26px' }} src={Logo} alt="" className="logo" />
            <div className="logo-copy" style={{ padding: '0 30px' }}>
              <h1 className="site-title">MOOTIX APP</h1>
              <small className="site-description">Kelompok 1 Apps</small>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-8 main-navigation mt-2 ">
                <button type="button" className="menu-toggle">
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/film">Film</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/review">Movie reviews</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/join">Join Us</Link>
                  </li>
                </ul>
                <form action="#" className="search-form">
                  <input type="text" placeholder="Search..." />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </form>
            </div>
            <div className="col-md-4 mt-2 px-5">
              {isAuthenticated ? (
                  <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-black fw-bold">
                    {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item disabled className="text-black">Role : {role}</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="white text-white">
                      <Button variant="danger" className="w-100">
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                ) : (
                  <Link to="/">
                    <button className="btn btn-success mt1" style={{ color: 'white', fontWeight: 'bold' }} type="submit">
                      LOGIN
                    </button>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
