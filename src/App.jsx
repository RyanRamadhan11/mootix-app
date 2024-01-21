import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import LoginCustomer from "./pages/LoginCustomer";
import LoginAdmin from './pages/LoginAdmin';
import PageFilm from './pages/PageFilm';
import PageAddFilm from './pages/PageAddFilm';
import PageUpdateFilm from './pages/PageUpdateFilm';
// import PrivateRoute from './PrivateRoute';

import RegisterAdmin from './pages/RegisterAdmin';
import RegisterCustomer from './pages/RegisterCustomer';
import Contact from './pages/PageContact';
import PageContact from './pages/PageContact';
import PageAbout from './pages/PageAbout';
import PageReview from './pages/PageReview';
import PageJoin from './pages/PageJoin';

import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { setAuthenticated, setAuthId, setAuthUsername, setAuthEmail, setAuthRole } from './store/authSlice';
import UpdateCustomer from "./pages/UpdateCustomer";
import { DashboardPage } from "./pages/DashboardPage";


function App() {
  
  const isLoggedIn = useSelector((state) => state.authentication.isAuthenticated);
  console.log(isLoggedIn)

  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUserData = () => {
  
      //untuk admin
      const storedAdmin = localStorage.getItem('adminData');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

      if (storedAdmin && isLoggedIn) {
        const user = JSON.parse(storedAdmin);

        dispatch(setAuthenticated(true));
        dispatch(setAuthId(user.id));
        dispatch(setAuthUsername(user.username));
        dispatch(setAuthEmail(user.email));
        dispatch(setAuthRole(user.role));
      }

      //untuk customer
      const storedCustomer = localStorage.getItem('customerData');
      const isLoggedInCs = localStorage.getItem('isLoggedIn') === 'true';

      if (storedCustomer && isLoggedInCs) {
        const customer = JSON.parse(storedCustomer);

        dispatch(setAuthenticated(true));
        dispatch(setAuthId(customer.id));
        dispatch(setAuthUsername(customer.username));
        dispatch(setAuthEmail(customer.email));
        dispatch(setAuthRole(customer.role));
      }
    };

    initializeUserData();
  }, [dispatch]);


  return (
    <>
      <Routes>
        {/* <Route path={"/"} element={<Home />} /> */}
        <Route
          path={"/login/customer"}
          element={isLoggedIn ? <Navigate to="/home" replace /> : <LoginCustomer />}
        />
        <Route
          path={"/"}
          element={isLoggedIn ? <Navigate to="/home" replace /> : <LoginAdmin />}
        />
        {/* <Route path="/" element={isLoggedIn ? <Navigate to="/home" replace /> : <LoginAdmin />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/film" element={<PageFilm />} />
        <Route path="/film/addFilm" element={<PageAddFilm />} />
        <Route path="/film/updateFilm/:id" element={<PageUpdateFilm />} />
        <Route path="/register/admin" element={<RegisterAdmin/>} />
        <Route path="/register/customer" element={<RegisterCustomer/>} />

        <Route path="/contact" element={<PageContact />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/review" element={<PageReview />} />
        <Route path="/join" element={<PageJoin />} />
        <Route path="/update-customer" element={<UpdateCustomer/>}/>
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* <Route path="/login/customer" element={<Login />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/film" element={<PageFilm />} />
        <PrivateRoute path="/film/addFilm" element={<PageAddFilm />} />
        <PrivateRoute path="/film/updateFilm/:id" element={<PageUpdateFilm />} />
        <Route path="/" element={<LoginAdmin />} /> */}
      </Routes>
    </>
  );
}

export default App;
