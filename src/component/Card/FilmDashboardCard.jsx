import React from "react";
// import { deleteFilmById } from "../../services/Film";
import { ToastContainer, toast } from "react-toastify";

export const FilmDashboardCard = ({
  setOpenModal,
  film,
  setPrevUpdateFilm,
  setTrigger,
}) => {
  const handleClick = async () => {
    // const responseStatus = await deleteFilmById(film.id);
    // if (responseStatus == 200) {
    //   toast.success("Success delete film");
    // } else {
    //   toast.error("Failed delete film " + responseStatus);
    // }
    // setTrigger(Math.random());
  };
  return (
    <>
      <ToastContainer />
      <div className="card" style={{ width: "18rem", marginTop: "8px" }}>
        <img
          className="card-img-top"
          src=""
          alt="Card image cap"
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h4 className="card-title"></h4>
          </div>

          <h6 className="card-text px-2 mt-3">Genre: </h6>
          <h6 className="px-2">Release date: </h6>

          <h6 className="px-2">Director: </h6>

          <div className="d-flex justify-content-around mt-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                setOpenModal(true), setPrevUpdateFilm(film), setTrigger(1);
              }}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleClick()}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
