import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
