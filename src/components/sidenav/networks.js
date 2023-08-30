import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import profilelogo from "../header/images/headerprofile.png";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Tab,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import LanIcon from "@mui/icons-material/Lan";
import FilterListIcon from "@mui/icons-material/FilterList";



const Themepro= createTheme({
  palette:{
      primary:{
          main: '#2a93bd',
      },
   
  },
});
function Network() {
  const [value, setvalue] = useState(1);
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className="onethirdwidth widthres basebgcolor pdxxl overflowy">
      <div className="flex alignctr justifybtw halfheight pdxxl">
        <div className="flex alignctr  feedgap">
          <LanIcon />
          <span className="textitem">Networks</span>
        </div>
        <div className="flex feedgap">
          <ThemeProvider theme={Themepro}>
          <Button
            variant="outlined"
            sx={{ color: "#2a93bd", borderColor: "#2a93bd" }}className="invite-btn"
          >
            <SendIcon />
            Invite
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#2a93bd" }}>
            <AddSharpIcon />
            New
          </Button>
          </ThemeProvider>
        </div>
      </div>
      <div >
        <ThemeProvider theme={Themepro}>
       
        <TabContext value={value} >
          <TabList 
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="borderbottomcolor "
            scrollButtons="auto"
            variant="scrollable"
          >
            <Tab label="My Networks" value="1" className="tabletextcolor" />
            <Tab label="Pending" value="2" className="tabletextcolor"/>
            <Tab label="Follow" value="3" className="tabletextcolor"/>
            <Tab label="BlockList" value="4" className="tabletextcolor"/>
          </TabList>
          
          <div className="flex justifybtw alignctr pdxxl">
            <div>
              <Typography>Total</Typography>
            </div>
            <div>
              <Tooltip title="Relations" placement="top">
              <Button
                variant="outlined"
                sx={{ color: "#2a93bd", borderColor: "#2a93bd" }}
              >
                <FilterListIcon />
                Relations
              </Button>
              </Tooltip>
            </div>
          </div>
          <TabPanel value="1">
            <div>
              <div className="flex flexwrap gap ">
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex onefourthwidth">
                  <CardContent>
                    <div className="flex alignctr">
                      <Avatar src={profilelogo} />
                      <Typography>The Jedi Order</Typography>
                    </div>

                    <div className="flex">
                      <Typography>relation:</Typography>
                      <Typography>Distributer of</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Industry:</Typography>
                      <Typography>Air transportation</Typography>
                    </div>
                    <div className="flex">
                      <Typography>Followers:</Typography>
                      <Typography>0</Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabPanel>
          <div className="flex justifyctr alignctr">
          <TabPanel value="2">
            <Typography>No Pending Data Found</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>No follow Requests</Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography>No Block Data Found</Typography>
          </TabPanel>
          </div>
        </TabContext>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Network;
