import TabPanel from "@mui/lab/TabPanel/TabPanel";
import React, { useState } from "react";

import { Button, Tab, TextField,  Typography } from "@mui/material";

import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";

import { Settings } from "@mui/icons-material";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const Themepro= createTheme({
  palette:{
      primary:{
          main: '#2a93bd',
      },
   
  },
});



function Resources() {
  const [value, setvalue] = useState("1");
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className="onethirdwidth widthres basebgcolor pdxxl">
      <div className="flex alignctr justifybtw halfheight pdxxl">
        <div className="flex alignctr  feedgap">
          <Settings />
          <span className="textitem">Settings</span>
        </div>
      </div>
      <div>
        <ThemeProvider theme={Themepro}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="borderbottomcolor"
          >
            <Tab label="Change Passward" value="1" className="tabletextcolor" />
            <Tab label="Languages" value="2" className="tabletextcolor" />
          </TabList>

          <TabPanel value="1" className="flex justifyctr">
          <div className="flexcol pdxxl bgtablecolor Brdradxxs halfwidth login bordercolor Brdradxxs">
              <Typography className="fontsizexl fontweightxl">
                Change Your Passward
              </Typography>
              <Typography className="MrgTsm MrgBsm">
                Please enter the fields below to change your current password
              </Typography>

              <div className="flexcol feedgap">
              
                <TextField
                
                  label="Current Password*"
                  variant="outlined"
                 
                />
                <TextField
             
                  label="New Password*"
                  variant="outlined"
                />
                <TextField
              
                  label="Confirm Password*"
                  variant="outlined"
                  className="textfieldcolor"
                />
             

                <div className="flex justifyend">
                  <Button variant="disabled">Reset</Button>
                  <Button variant="contained" sx={{backgroundColor: "#2a93bd", borderColor: "#2a93bd" }}>Save</Button>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="2"></TabPanel>
        </TabContext>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Resources;
