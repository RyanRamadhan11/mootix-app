import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import eye from '../assets/images/eye.svg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

function RegisterCustomer() {

    const togglePass = "/assets/eye.svg"
    const url = "http://localhost:3001/customers"

    const navigate = useNavigate()

    const [newUser, setNewUser] = useState({
        id: Date.now().toString(),
        username: "", 
        password: "", 
        email: "", 
        role: "customer"
    })

 
    const handleShowPass = () => {
        let input = document.getElementById("setPassword");
        if (input.type === "password") input.type = "text";
        else input.type = "password";
    }

    const handleAddAdmin = (e) => {
        e.preventDefault()

        if (newUser.email != "" && newUser.username != "" && newUser.password != "") {
            axios.post(url, newUser)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered as an Customer!',
                });
                navigate("/");
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Error',
                    text: 'An error occurred during registration. Please try again later.',
                });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Input Error',
                text: 'Fields cannot be empty. Please fill in all the required information.',
            });
        }
    }

  return (
    <div>
        <section className="vh-100" style={{ backgroundColor: "#000" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: 25 }}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Customer Registration
                            </p>
                            <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center ">
                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                <input
                                    type="text"
                                    id="form3Example1c"
                                    className="form-control mt-4"
                                    onChange={e => setNewUser({...newUser, username: e.target.value})}
                                />
                                <label className="form-label mt-2" htmlFor="form3Example1c">
                                    Username
                                </label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                <div className="form-outline flex-fill mb-0">
                                <input
                                    type="email"
                                    id="form3Example3c"
                                    className="form-control mt-4"
                                    onChange={e => setNewUser({...newUser, email: e.target.value})}
                                />
                                <label className="form-label mt-2" htmlFor="form3Example3c">
                                    Email
                                </label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <i className="fas fa-lock fa-lg me-3 fa-fw" style={{marginTop:'-1.5em'}} />
                                <div className="form-outline flex-fill mb-0">
                                <input
                                    type="password"
                                    id="setPassword"
                                    className="form-control mt-4"
                                    onChange={e => setNewUser({...newUser, password: e.target.value})}
                                />
                                <label className="form-label mt-2" htmlFor="form3Example4c">
                                    Password
                                </label>
                                <div className='mt-1'>
                                    <img src={eye} style={{height: '20px', width: '20px', cursor: 'pointer' }} id="showHidePass" onClick={handleShowPass} /> Show Password
                                </div>
                                </div>
                            </div>
                            <div className="mt-4 mx-4 mb-3 mb-lg-4" style={{paddingLeft: '1em'}}>
                                <button type="button" className="btn btn-primary" onClick={handleAddAdmin}>
                                Register
                                </button>
                            </div>
                                <p className="pb-lg-2" style={{ color: '#393f81', paddingLeft: '2.8em' }}>
                                    Have an account customer? 
                                    <Link to="/login/customer" className="mx-2" style={{color: 'blue'}}>
                                    Login customer here
                                    </Link>
                                </p>
                                <p className="" style={{ color: '#393f81', paddingLeft: '2.8em', paddingBottom: '2em' }}>
                                    You are admin ? 
                                    <Link to="/register/admin" className="mx-2" style={{color: 'blue'}}>
                                    Register here
                                    </Link>
                                </p>
                                <Link to="#!" className="small text-muted">Terms of use. </Link>
                                <Link to="#!" className="small text-muted">Privacy policy</Link>
                            </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid"
                            alt="Sample image"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default RegisterCustomer;