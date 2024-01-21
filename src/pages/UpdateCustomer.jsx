import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setUsername,
  setEmail,
  setPassword,
  updateCustomer,
} from "../store/customerSlice.js";

const UpdateCustomer = () => {
  const dispatch = useDispatch();
  const customerData = useSelector((state) => state.customer);

  const [updatedData, setUpdateData] = useState({
    username: customerData.username,
    email: customerData.email,
    password: "",
  });

  const handleInputChange = (e) => {
    setUpdateData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateCustomer = () => {
    const { id } = customerData;
    dispatch(setUsername(updatedData.username));
    dispatch(setEmail(updatedData.email));
    dispatch(setPassword(updatedData.password));
    dispatch(updateCustomer(id, updatedData));
  };

  const handleUpdatePassword = (newPassword) => {
    dispatch(setPassword(newPassword));
  };

  return (
    <div>
      <section className="text-center">
        <div
          className="p-5 bg-image"
          style={{
            backgroundColor: 'black'
          }}
        />
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="card mx-4 mx-md-5 shadow-5-strong">
                <div
                    className="card-body py-5 px-md-5"
                    style={{
                    background: "hsla(0, 0%, 100%, 0.8)",
                    }}
                >
                    <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">Update Personal Info</h2>

                        <form>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="username">
                            Username
                            </label>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            value={updatedData.username}
                            onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label" htmlFor="email">
                            Email address
                            </label>
                            <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                            value={updatedData.email}
                            onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label" htmlFor="password">
                            Password
                            </label>
                            <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={updatedData.password}
                            onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary btn-block mb-4"
                            onClick={handleUpdateCustomer}
                        >
                            Update Profile
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

      </section>
    </div>
  );
};

export default UpdateCustomer;
