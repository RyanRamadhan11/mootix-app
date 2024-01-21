import React, { useState } from "react";
import { FilmDashboardCard } from "../Card/FilmDashboardCard";
import { SideBarDashboard } from "../SidebarDashboard/SidebarDashboard";
import { ModalUpdateFilm } from "../Modal/UpdateModalFilm";
// import { getFilmByAdminId } from "../../services/Film";

export const DashboardProfile = ({ openModal, setOpenModal }) => {
  const [trigger, setTrigger] = useState(0);
  const [prevUpdateFilm, setPrevUpdateFilm] = useState();
//   const film = getFilmByAdminId(1, trigger);

  return (
    <>
      <ModalUpdateFilm
        openModal={openModal}
        setOpenModal={setOpenModal}
        prevUpdateFilm={prevUpdateFilm}
        setTrigger={setTrigger}
      />
      <SideBarDashboard />
      <div className="d-flex justify-content-around">
        <div className=""></div>
        <div className="row" style={{ maxWidth: "70%" }}>
          {/* {film.map((film, index) => ( */}
            <div className="col" >
              <FilmDashboardCard
                setOpenModal={setOpenModal}
                // film={film}
                setPrevUpdateFilm={setPrevUpdateFilm}
                // setTrigger={setTrigger}
              />
            </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
};
