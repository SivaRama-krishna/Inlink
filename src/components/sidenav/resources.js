import TabPanel from "@mui/lab/TabPanel/TabPanel";
import React, { useState } from "react";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { Button, Tab, ThemeProvider, Tooltip, Typography, createTheme } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Search } from "@mui/icons-material";
const Themepro= createTheme({
  palette:{
      primary:{
          main: '#2a93bd',
      },
   
  },
});
function Resources(){
    const[value,setvalue]=useState("1");
    const  handleChange=(event,newValue)=>{
        setvalue(newValue);
    }
    return(
        <div className="onethirdwidth widthres basebgcolor pdxxl">
        <div className="flex alignctr justifybtw halfheight pdxxl">
          <div className="flex alignctr  feedgap">
            <ImportContactsIcon />
            <span className="textitem">Categories</span>
          </div>
            <div>
                <Search/>
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
              <Tab label="My Resources" value="1" className="tabletextcolor" />
              <Tab label="Network Resources" value="2" className="tabletextcolor"/>
             
            </TabList>
            <div className="flex justifybtw alignctr  pdxxl">
              <div>
                <Typography>Total</Typography>
              </div>
              <div className="flex gap">
              <Button variant="contained" sx={{ backgroundColor: "#2a93bd" }}>
            <AddSharpIcon />
            New
          </Button>
          <Tooltip title="Filter" placement="top">
                  <Button
                    variant="outlined"
                    sx={{ color: "#2a93bd", borderColor: "#2a93bd" }}
                  >
                    <FilterListIcon />
                  </Button>
                  </Tooltip>
              </div>
             
            </div>
            <TabPanel value="1">
            
             
            </TabPanel>
            <div className="flex justifyctr alignctr">
            <TabPanel value="2">
           
            </TabPanel>
         
            </div>
          </TabContext>
          </ThemeProvider>
        </div>
      </div>

    )
}
export default Resources