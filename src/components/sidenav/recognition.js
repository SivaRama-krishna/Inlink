import TabPanel from "@mui/lab/TabPanel/TabPanel";
import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Button, Tab, ThemeProvider, Typography, createTheme } from "@mui/material";
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
function Recognition() {
  const [value, setvalue] = useState("1");
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div className="onethirdwidth widthres basebgcolor pdxxl">
      <div className="flex alignctr justifybtw halfheight feedgap pdxxl">
        <div className="flex alignctr  feedgap">
          <WorkspacePremiumIcon />
          <span className="textitem">Recognition</span>
        </div>
        <div className="flex alignctr gap">
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
            <Tab label="Published" value="1" className="tabletextcolor" />
            <Tab label="UnPublished" value="2" className="tabletextcolor" />
          </TabList>
          <div className="flex justifyctr pdxxl">
           
            <TabPanel value="1">
              <Typography>No Recognition Found</Typography>
            </TabPanel>
           
            <TabPanel value="2">
                <Typography>No Recognition Found</Typography>
            </TabPanel>
          </div>
       
        </TabContext>
        </ThemeProvider>
      
      </div>
    </div>
  );
}
export default Recognition;
