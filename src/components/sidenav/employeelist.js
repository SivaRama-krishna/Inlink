import {
    Avatar,

  Button,
  Divider,
  Menu,
  MenuItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";

import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GroupsIcon from "@mui/icons-material/Groups";
import SendIcon from "@mui/icons-material/Send";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import logo from "../header/images/headerprofile.png";

const Themepro= createTheme({
  palette:{
      primary:{
          main: '#2a93bd',
      },
   
  },
});


function createData(name,email,department,designation,location) { 
  return { name, email, department, designation, location };
}

const rows = [createData("Ram", "Ram@gamil.com", "software", "Ui", "Hydrabad"),
createData("Ram", "Ram@gamil.com", "Software", "UI", "Hydrabad"),
createData("Ram", "Ram@gamil.com", "Software", "UI", "Hydrabad"),
createData("Ram", "Ram@gamil.com", "Software", "UI", "Hydrabad"),
createData("Ram", "Ram@gamil.com", "Software", "UI", "Hydrabad"),
createData("Ram", "Ram@gamil.com", "Software", "UI", "Hydrabad")
];

function EmployeeList() {
  const [value, setvalue] = useState("1");
  const [open, setopen] = useState(false);
  const handleChange = (event,newValue) => {
    setvalue(newValue);
  };
  const toggleopen = () => {
    setopen(true);
  };
  const toggleclose = () => {
    setopen(false);
  };
  return (
    <div className="onethirdwidth basebgcolor pdxxl widthres">
      <div className="flex alignctr justifybtw halfheight pdxxl">
        <div className="flex alignctr  feedgap">
          <GroupsIcon />
          <span className="textitem">Employee List</span>
        </div>
        <div className="flex feedgap">
          <ThemeProvider theme={Themepro}>
          <Button
            variant="outlined"
            sx={{ color: "#2a93bd", borderColor: "#2a93bd" }} className="invite-btn employee-invite-btn" 
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
      <div>
        <ThemeProvider theme={Themepro}>
        <TabContext value={value} >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="borderbottomcolor  "
          >
            <Tab label="Active" value="1" className="tabletextcolor"/>
            <Tab label="Pending" value="2" className="tabletextcolor"/>
            <Tab label="Rejected" value="3" className="tabletextcolor"/>
          </TabList>

          <TabPanel value="1">
            <div>
              <div className="flex justifybtw alignctr">
                <div>
                  <Typography>Total</Typography>
                </div>
                <div className="flex gap">
                  <Tooltip title="sort" placement="top">
                  <Button
                    variant="outlined"
                    sx={{ color: "#2a93bd", borderColor: "#2a93bd" }}
                    onClick={toggleopen}
                  >
                    <SortSharpIcon />
                  </Button>
                  </Tooltip>
                  <Menu
                    onClick={toggleclose}
                    id="demo-positioned-menu"
                    aria-aria-labelledby="demo-positioned-button"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                  >
                    <MenuItem>Sort By</MenuItem>
                    <Divider />
                    <MenuItem>Employess</MenuItem>
                    <MenuItem>Admins</MenuItem>
                    <MenuItem>Relation Managers</MenuItem>
                    <MenuItem>Reset</MenuItem>
                  </Menu>
                  <Tooltip title="Filter" placement="top">
                  <Button
                    variant="outlined"
                    sx={{ color: "#2a93bd", borderColor: "#2a93bd" }}
                  >
                    <FilterListSharpIcon />
                  </Button>
                  </Tooltip>
                </div>
              </div>
              <div className="bgtablecolor MrgTsm">
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>FullName</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Department</TableCell>
                        <TableCell align="right">Designation</TableCell>
                        <TableCell align="right">Location</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row" sx={{display:"flex",gap:"10px",alignItems:"center"}}>
                           <Avatar src={logo}/> {row.name}
                          </TableCell>
                          <TableCell align="right" className="tabletextcolor">{row.email}</TableCell>
                          <TableCell align="right">{row.department}</TableCell>
                          <TableCell align="right">{row.designation}</TableCell>
                          <TableCell align="right">{row.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </TabPanel>
          <div className="flex justifyctr alignctr">
          <TabPanel value="2">
            <Typography>No Pending Data Found</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>No Rejected Data Found</Typography>
          </TabPanel>
          </div>
        </TabContext>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default EmployeeList;
