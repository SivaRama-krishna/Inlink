import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainhoc from "../mainhoc/mainhoc";
import EmployeeList from "../sidenav/employeelist";
import Header from "../header/header";
import Bodycontent from "../bodycontent/bodycontent";
import Network from "../sidenav/networks";
import Resources from "../sidenav/resources";
import Mediakit from "../sidenav/ mediakit";
import Configuration from "../sidenav/configuration";
import Collaboration from "../sidenav/collaboration";
import Recognition from "../sidenav/recognition";

import Setting from "../sidenav/settings";
import Chats from "../sidenav/chats";
import Certification from "../sidenav/certification";
import Deal from "../sidenav/deal";
import Affilite from "../sidenav/affilite";
import CompanyProfile from "../sidenav/companyprofile";
import Myprofile from "../sidenav/myprofile";

function Myroutes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhoc />}>
            <Route path="/" element={<Bodycontent />} />
            <Route path="employeelist" element={<EmployeeList />} />
            <Route path="network" element={<Network />} />
            <Route path="chats" element={<Chats/>}/>
            <Route path="resources" element={<Resources />} />
            <Route path="mediakit" element={<Mediakit />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="Collaboration" element={<Collaboration />} />
            <Route path="certification" element={<Certification/>}/>
            <Route path="recognition" element={<Recognition />} />
            <Route path="deal" element={<Deal/>}/>
            <Route path="affilite" element={<Affilite/>}/>
            <Route path="companyprofile" element={<CompanyProfile/>}/>
            <Route path="myprofile" element={<Myprofile/>}/>
            <Route path="settings" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Myroutes;
