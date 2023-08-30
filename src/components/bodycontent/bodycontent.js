import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,

  Menu,
  MenuItem,
 
  Tooltip,
 
  Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import FeedIcon from "@mui/icons-material/Feed";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CollectionsIcon from "@mui/icons-material/Collections";
import profilelogo from "../header/images/headerprofile.png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import bodylogo from "../header/images/bodyprofile.png";
import image1 from "../header/images/feed.jpg";


function Bodycontent() {
  const [open, setopen] = useState(false);
  const toggleopen = () => {
    setopen(true);
  };
  const toggleclose = () => {
    setopen(false);
  };
  return (
    <div className="onethirdwidth basebgcolor Fullheight widthres overflowy bodycontent">
      <div className="justifybtw flex alignctr heightpx bordercolor bodyfeed">
        <div className="flex alignctr feedgap ">
          <FeedIcon />
          <Typography className="newsfeed">News Feed</Typography>
        </div>
        <div className="flex alignctr">
        <div className="header-search">
        <SearchIcon />
        </div>
        <div className="flex gap pdxxl alignctr">
        <Tooltip title="Search" placement="top">
          <input type="text" placeholder="Search all fields..." className="search-input"/></Tooltip>
         
          <MoreVertIcon onClick={toggleopen} />
          </div>
          <Menu
            onClick={toggleclose}
            id="demo-positioned-menu"
            aria-aria-labelledby="demo-positioned-button"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
          >
            <MenuItem>Filter</MenuItem>
            <MenuItem>Archieved</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="flex fullwidth bodyfeed">
        <div className="left">
          <div className="header-body">
            <Avatar src={profilelogo} />
            <Tooltip title="Search" placement="top">
           
            <input type="search" placeholder="Write what is on your mind ?" className="search-header-input"/>
            </Tooltip>
            <Tooltip title="Gallery" placement="top">
            <CollectionsIcon className="collectionicon" />
            </Tooltip>
          </div>
          <div className="cards">
            <Card>
              <CardHeader
                className="cards1"
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={bodylogo} alt="" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreHorizIcon />
                  </IconButton>
                }
                title="Bloom Marketings"
                subheader="Software and IT +33"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" p={1}>
                  Inlink Pro - Business Digital Ecosystem!!!
                </Typography>
                <Typography variant="body2" color="text.secondary" p={1}>
                  inLink is a cloud-based SaaS video consultation platform for
                  contemporary consultants who aim to accomplish new pathways in
                  Business. It redefines virtual consultations and centralizes
                  all your client bookings, workshops, payments, video calls,
                  and more. No code or installations are required & it gets you
                  started within 2 minutes.
                </Typography>
              </CardContent>

              <CardMedia
                className="cardimg"
                component="img"
                src={image1}
                alt="Paella dish"
              />
              <div className="buttons">
                <IconButton aria-label="add to favorites" className="iconbtn">
                  <ThumbUpOffAltIcon className="likebtn" />
                  <span className="likebtn">Like</span>
                </IconButton>
                <IconButton aria-label="share">
                  <CommentIcon className="likebtn" />
                  <span className="likebtn">Comment</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className="likebtn" />
                  <span className="likebtn">Share</span>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className="cards">
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={bodylogo} alt="" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreHorizIcon />
                  </IconButton>
                }
                title="Bloom Marketings"
                subheader="Software and IT +33"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" p={1}>
                  Inlink Pro - Business Digital Ecosystem!!!
                </Typography>
                <Typography variant="body2" color="text.secondary" p={1}>
                  inLink is a cloud-based SaaS video consultation platform for
                  contemporary consultants who aim to accomplish new pathways in
                  Business. It redefines virtual consultations and centralizes
                  all your client bookings, workshops, payments, video calls,
                  and more. No code or installations are required & it gets you
                  started within 2 minutes.
                </Typography>
              </CardContent>

              <CardMedia
                className="cardimg"
                component="img"
                src={image1}
                alt="Paella dish"
              />
              <div className="buttons">
                <IconButton aria-label="add to favorites" className="iconbtn">
                  <ThumbUpOffAltIcon className="likebtn" />{" "}
                  <span className="likebtn">Like</span>
                </IconButton>
                <IconButton aria-label="share">
                  <CommentIcon className="likebtn" />
                  <span className="likebtn">Comment</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className="likebtn" />
                  <span className="likebtn">Share</span>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className="cards">
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={bodylogo} alt="" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreHorizIcon />
                  </IconButton>
                }
                title="Bloom Marketings"
                subheader="Software and IT +33"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" p={1}>
                  Inlink Pro - Business Digital Ecosystem!!!
                </Typography>
                <Typography variant="body2" color="text.secondary" p={1}>
                  inLink is a cloud-based SaaS video consultation platform for
                  contemporary consultants who aim to accomplish new pathways in
                  Business. It redefines virtual consultations and centralizes
                  all your client bookings, workshops, payments, video calls,
                  and more. No code or installations are required & it gets you
                  started within 2 minutes.
                </Typography>
              </CardContent>

              <CardMedia
                className="cardimg"
                component="img"
                src={image1}
                alt="Paella dish"
              />
              <div className="buttons">
                <IconButton aria-label="add to favorites" className="iconbtn">
                  <ThumbUpOffAltIcon className="likebtn" />
                  <span className="likebtn">Like</span>
                </IconButton>
                <IconButton aria-label="share">
                  <CommentIcon className="likebtn" />
                  <span className="likebtn">Comment</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className="likebtn" />
                  <span className="likebtn">Share</span>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className="cards">
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={bodylogo} alt="" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreHorizIcon />
                  </IconButton>
                }
                title="Bloom Marketings"
                subheader="Software and IT +33"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" p={1}>
                  Inlink Pro - Business Digital Ecosystem!!!
                </Typography>
                <Typography variant="body2" color="text.secondary" p={1}>
                  inLink is a cloud-based SaaS video consultation platform for
                  contemporary consultants who aim to accomplish new pathways in
                  Business. It redefines virtual consultations and centralizes
                  all your client bookings, workshops, payments, video calls,
                  and more. No code or installations are required & it gets you
                  started within 2 minutes.
                </Typography>
              </CardContent>

              <CardMedia
                className="cardimg"
                component="img"
                src={image1}
                alt="Paella dish"
              />
              <div className="buttons">
                <IconButton aria-label="add to favorites" className="iconbtn">
                  <ThumbUpOffAltIcon className="likebtn" />{" "}
                  <span className="likebtn">Like</span>
                </IconButton>
                <IconButton aria-label="share">
                  <CommentIcon className="likebtn" />
                  <span className="likebtn">Comment</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className="likebtn" />
                  <span className="likebtn">Share</span>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className="cards">
            <Card className="cards1">
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    <img src={bodylogo} alt="" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreHorizIcon />
                  </IconButton>
                }
                title="Bloom Marketings"
                subheader="Software and IT +33"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" p={1}>
                  Inlink Pro - Business Digital Ecosystem!!!
                </Typography>
                <Typography variant="body2" color="text.secondary" p={1}>
                  inLink is a cloud-based SaaS video consultation platform for
                  contemporary consultants who aim to accomplish new pathways in
                  Business. It redefines virtual consultations and centralizes
                  all your client bookings, workshops, payments, video calls,
                  and more. No code or installations are required & it gets you
                  started within 2 minutes.
                </Typography>
              </CardContent>

              <CardMedia component="img" src={image1} alt="Paella dish" className="cardimg" />
              <div className="buttons">
                <IconButton aria-label="add to favorites" className="iconbtn">
                  <ThumbUpOffAltIcon className="likebtn" />{" "}
                  <span className="likebtn">Like</span>
                </IconButton>
                <IconButton aria-label="share">
                  <CommentIcon className="likebtn" />
                  <span className="likebtn">Comment</span>
                </IconButton>
                <IconButton>
                  <ShareIcon className="likebtn" />
                  <span className="likebtn">Share</span>
                </IconButton>
              </div>
            </Card>
          </div>
        </div>
        <div className="right MrgTsm">
          <Typography className="fontsizexl">My BookMarks</Typography>
          <div className="flexcol justifyctr alignctr MrgTsm bookbgcolor halfheight">
            <Typography>Bookmarks</Typography>
            <Typography className="textright">You have not save any bookmarks yet!</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bodycontent;
