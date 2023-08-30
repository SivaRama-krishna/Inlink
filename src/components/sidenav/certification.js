import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import { Button, Divider, Tab, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
const Themepro= createTheme({
    palette:{
        primary:{
            main: '#2a93bd',
        },
     
    },
  });
function Certification (){
    const[value,setvalue]=useState("1");

    const handlechange=(event,newvalue)=>{
        setvalue(newvalue);
    }
    return(
        <div className="basebgcolor pdxxl overflowy widthres onethirdwidth">
            <ThemeProvider theme={Themepro}>
            <TabContext value={value}>
                <TabList onChange={handlechange} aria-label="lab API tabs example">
                    <Tab label="Create Certification" value="1"/>
                    <Tab label="My Exams" value="2"/>
                </TabList>
                <Divider sx={{width:"1000px"}}/>
                <TabPanel value="1">
                    <TabContext value={value}>
                    <TabList onChange={handlechange} aria-label="lab API tabs example">
                        <Tab label="Marketing System" value="3"/>
                        <Tab label="Question Bank" value="4"/>
                        <Tab label="Templates" value="5"/>
                        <Tab label="Certification" value="6"/>
                    </TabList>
                    <TabPanel value="3"></TabPanel>
                    <TabPanel value="4"></TabPanel>
                    <TabPanel value="5"></TabPanel>
                    <TabPanel value="6"></TabPanel>
                    
                   
                    </TabContext>
                </TabPanel>
                
                <TabPanel value="2">world</TabPanel>
            </TabContext>
            </ThemeProvider>
        </div>

    )
}
export default Certification