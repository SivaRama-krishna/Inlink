import TabPanel from "@mui/lab/TabPanel/TabPanel";
import React, { useState } from "react";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { Button, Tab, ThemeProvider, Tooltip, Typography, createTheme } from "@mui/material";
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
function Collaboration() {
  const [value, setvalue] = useState("1");
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className="onethirdwidth widthres basebgcolor pdxxl">
      <div className="flex alignctr justifybtw halfheight pdxxl">
        <div className="flex alignctr  feedgap ">
          <GroupWorkIcon />
          <span className="textitem">Collaboration</span>
        </div>
        <div className="flex alignctr ">
          <Search className="configuration-search"/>
          <ThemeProvider theme={Themepro}>
          <Button variant="contained" sx={{ backgroundColor: "#2a93bd" }}>
            <AddSharpIcon />
            New
          </Button>
          </ThemeProvider>
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
            <Tab label="Task" value="1" className="tabletextcolor" />
            <Tab
              label="Reminder"
              value="2"
              className="tabletextcolor"
            />
          </TabList>
          <div className="flex justifybtw alignctr  pdxxl">
            <Typography>Total</Typography>
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
export default Collaboration;
