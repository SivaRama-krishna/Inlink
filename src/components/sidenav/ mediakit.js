import TabPanel from "@mui/lab/TabPanel/TabPanel";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Tab, ThemeProvider, createTheme, } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";

import { Search } from "@mui/icons-material";


const Themepro= createTheme({
  palette:{
      primary:{
          main: '#2a93bd',
      },
   
  },
});
function Mediakit() {
  const [value, setvalue] = useState("1");
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className="onethirdwidth widthres basebgcolor pdxxl">
      <div className="flex alignctr justifybtw halfheight pdxxl">
        <div className="flex alignctr  feedgap">
          <SaveIcon />
          <span className="textitem">MediaKit</span>
        </div>
        <div>
          <Search />
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
            <Tab label="My Folders" value="1" className="tabletextcolor" />
            <Tab
              label="Share Items"
              value="2"
              className="tabletextcolor"
            />
            <Tab label="Trash" value="3" className="tabletextcolor">

            </Tab>
          </TabList>
          <div className="flex justifyend  pdxxl">
            <Button variant="contained" sx={{ backgroundColor: "#2a93bd" }}>
              <AddSharpIcon />
              New
            </Button>
          </div>
          <TabPanel value="1"></TabPanel>
          <div className="flex justifyctr alignctr">
            <TabPanel value="2"></TabPanel>
          </div>
        </TabContext>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Mediakit;
