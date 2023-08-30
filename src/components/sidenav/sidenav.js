import { Settings } from "@mui/icons-material";
import LanIcon from "@mui/icons-material/Lan";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ChatIcon from "@mui/icons-material/Chat";
import SaveIcon from "@mui/icons-material/Save";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import RedeemIcon from "@mui/icons-material/Redeem";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Person2Icon from "@mui/icons-material/Person2";
import LoginIcon from "@mui/icons-material/Login";
import FeedIcon from "@mui/icons-material/Feed";
import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Divider, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";


function Sidenav() {
  const location = useLocation();

  return (
    <div className={"coloractive sidenav overflowy  onefourthwidth  Fullheight bordercolor"}>
      <ul className="flexcol">
      
        <Tooltip title="News Feed" placement="right" arrow >
        <Link to="/"  className={`liicons ${location.pathname === '/' ? 'active' : ''}`}>
          <li>
            <FeedIcon className="sidebar-icon"/>
           <Typography className="side-text">News Feed</Typography>
          </li>
         
        </Link>
         </Tooltip>
      
         <Tooltip title="Employee" placement="right" arrow>
        <Link to="/employeelist"  className={`liicons ${location.pathname === '/employeelist' ? 'active' : ''}`}>
          <li>
            <Diversity3Icon className="sidebar-icon" />
            <Typography className="side-text">Employee</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Network" placement="right" arrow>

        <Link to="/network"className={`liicons ${location.pathname === '/network' ? 'active' : ''}`}>
          <li>
            <LanIcon className="sidebar-icon" />
            <Typography className="side-text">Network</Typography>
          </li>
        </Link>
        </Tooltip>
       
        <Tooltip title="Chat" placement="right" arrow>
        <Link to="/chats" className={`liicons ${location.pathname === '/chats' ? 'active' : ''}`}>
        <li>
          <ChatIcon className="sidebar-icon"/>
          <Typography className="side-text">Chat</Typography>
        </li>
        </Link>
        </Tooltip>
        <Tooltip title="Resources" placement="right" arrow>
        <Link to="/resources" className={`liicons ${location.pathname === '/resources' ? 'active' : ''}`}>
          <li>
            <ImportContactsIcon className="sidebar-icon" />
            <Typography className="side-text">Resources</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Med Kit" placement="right" arrow>
        <Link to="/mediakit" className={`liicons ${location.pathname === '/mediakit' ? 'active' : ''}`}>
          <li>
            <SaveIcon className="sidebar-icon" />
            <Typography className="side-text">Med Kit</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Configuration" placement="right" arrow>
        <Link to="configuration" className={`liicons ${location.pathname === '/configuration' ? 'active' : ''}`}>
          <li>
            <PermDataSettingIcon className="sidebar-icon"/>
            <Typography className="side-text">Configuration</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Collobaration" placement="right" arrow>
        <Link to="/Collaboration" className={`liicons ${location.pathname === '/Collaboration' ? 'active' : ''}`}>
          <li>
            <GroupWorkIcon className="sidebar-icon" />
            <Typography className="side-text">Collobaration</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Certification" placement="right" arrow>
          <Link to="/certification"  className={`liicons ${location.pathname === '/certification' ? 'active' : ''}`}>
        <li>
          <RedeemIcon className="sidebar-icon"/>
          <Typography className="side-text">Certification</Typography>
        </li>
        </Link>
        </Tooltip>
        <Tooltip title="Recognition" placement="right" arrow>
        <Link to="/recognition" className={`liicons ${location.pathname === '/recognition' ? 'active' : ''}`}>
          <li>
            <WorkspacePremiumIcon className="sidebar-icon" />
            <Typography className="side-text">Recognition</Typography>
          </li>
        </Link>
        </Tooltip>
        <Tooltip title="Deal Regestration" placement="right" arrow>
          <Link to="/deal" className={`liicons ${location.pathname === '/deal' ? 'active' : ''}`}>
        <li>
          <LocalOfferIcon  className="sidebar-icon"/>
          <Typography className="side-text">Deal Regestration</Typography>
        </li>
        </Link>
        </Tooltip>
        <Tooltip title="Affilite Programm" placement="right" arrow>
          <Link to="/affilite" className={`liicons ${location.pathname === '/affilite' ? 'active' : ''}`}>
        <li>
          <DonutSmallIcon className="sidebar-icon"/>
          <Typography className="side-text">Affilite programm</Typography>
        </li>
        </Link>
        </Tooltip>
        <Tooltip title="Company Profile" placement="right" arrow>
          <Link to="/companyprofile" className={`liicons ${location.pathname === '/companyprofile' ? 'active' : ''}`}>
        <li>
          <ApartmentIcon className="sidebar-icon"/>
          <Typography className="side-text">Company Profile</Typography>
        </li>
        </Link>
        </Tooltip>
        <br />
        <br />
        <br />
        <Tooltip title="My Profile" placement="right" arrow>
          <Link to="/myprofile" className={`liicons ${location.pathname === '/myprofile' ? 'active' : ''}`}>
        <li>
          <Person2Icon className="sidebar-icon"/>
          <Typography className="side-text">My Profile</Typography>
        </li>
        </Link>
        </Tooltip>
        <Tooltip title="Settings" placement="right" arrow>
        <Link to="/settings" className={`liicons ${location.pathname === '/settings' ? 'active' : ''}`}>
          <li>
            <Settings className="sidebar-icon"/>
            <Typography className="side-text">Settings</Typography>
          </li>
        </Link>
        </Tooltip>
        <br/>

        <Divider />
        <Tooltip title="Log out" placement="right" arrow>
        <li>
          <LoginIcon className="sidebar-icon" />
          <Typography className="side-text">Log out</Typography>
        </li>
        </Tooltip>
      </ul>
    </div>
  );
}
export default Sidenav;
