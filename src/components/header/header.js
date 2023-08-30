import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Icon,
  Menu,
  MenuItem,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import image1 from "../header/images/inLynk_Logo.svg";
import profilelogo from "../header/images/headerprofile.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


const Themepro=createTheme({
  palette:{
    secondary:{
      main:'#2a93bd'
    }
  }
})



const Header = () => {
  const [open, setopen] = useState(false);

  const toggleopen = () => {
    setopen(true);
  };
  const toggleclose = () => {
    setopen(false);
  };

  return (
   
      <div className="flex justifybtw alignctr fullheightpix pdxxl">
        <div className="flex feedgap">
          <img src={image1} className="headerlogo" alt="" />
        </div>
        <div className="flex justifybtw  alignctr gap">
          <Icon className="badge">
            <ThemeProvider theme={Themepro}>
            <Badge  badgeContent={"99+"} color="secondary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
            </ThemeProvider>
          </Icon>
          <div className="flex justifybtw alignctr gap ">
            <Typography className="ebsc profile">EBCS Admin</Typography>
            <Tooltip title="Profile">
              <Avatar src={profilelogo} onClick={toggleopen} />
            </Tooltip>

            <Menu
              onClick={toggleclose}
              id="demo-positioned-menu"
              aria-aria-labelledby="demo-positioned-button"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Log out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      
    
  );
};
export default Header;
