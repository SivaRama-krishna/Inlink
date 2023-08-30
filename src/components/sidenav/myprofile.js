import {
  Avatar,
 
  Card,
  CardContent,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import profilelogo from "../header/images/headerprofile.png";
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
function Myprofile() {
  return (
    <div className="profile-cards onethirdwidth basebgcolor widthres">
      <div className="profile-card ">
        <Card className="main-card MrgTmd ">
          <CardContent>
            <div className="card-profile">
                <div className="flex gap ">
              <div>
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={profilelogo}
                />
              </div>
              <div>
                <Typography>EBCS Admin</Typography>
                <div className="flex gap MrgTmd">
                  <Typography>Employee ID</Typography>
                  <Typography> : 3001</Typography>
                </div>
                <div className="flex gap">
                  <Typography>Department</Typography>
                  <Typography> :CEO</Typography>
                </div>
                <div className="flex gap">
                  <Typography>Division</Typography>
                  <Typography> :Board of Directors(B of D)</Typography>
                </div>
                <div className="flex gap">
                  <Typography>Designation</Typography>
                  <Typography> :FOUNDER</Typography>
                </div>
                <div className="flex gap MrgBmd">
                  <Typography>Company Name</Typography>
                  <Typography> :EBCS Global Solution</Typography>
                </div>
                <Divider />
              </div>
              </div>
              <div>
                <Tooltip title="edit">
                    <EditIcon sx={{backgroundColor:"#eeeeee",height:"30px",width:"30px" ,color:"#2a93bd"}}/>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default Myprofile;
