import { useState } from "react";
import { DashboardProfile } from "../component/DashboardProfile/DashboardProfile";

export const DashboardPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <DashboardProfile openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
