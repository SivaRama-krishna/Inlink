import { Outlet } from "react-router-dom";
import Sidenav from "../sidenav/sidenav";

const Mainhoc = () => {
  return (
    <div className="flex Fullheightcal fullwidth">
      <Sidenav />
      <Outlet />
    </div>
  );
};
export default Mainhoc;
