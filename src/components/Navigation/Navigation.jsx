import React from 'react'
import ReactStars from "react-rating-stars-component";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import "./Navigation.css";

function Navigation({ getTitleSearch, getRatingSearch }) {

  const ratingChanged = (newRating) => {
    getRatingSearch(newRating);
  };
  const handleSearch= (e) => {
    getTitleSearch(e.target.value);
  };

  return (
    <div >
      <Box sx={{ flexGrow: 1 }}  >
        <AppBar className="navigation-bar" position="static" style={{ display: "flex", flexDirection: "row", justifyContent: 'center ', alignItems: 'space-evenly' }}>
        <img src="https://img.icons8.com/ultraviolet/48/000000/avengers.png"/>
          <Typography
            variant="h6"
            style={{
              marginTop: "10px",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            MOVIES
          </Typography>
          <div>
            <input type="search" placeholder="search..."  onChange={handleSearch} style={{background: "transparent" ,borderColor: "white" , width: "124px", borderRadius: "6%", marginLeft: "10px", marginTop:"16px", color:"white"}} /><SearchIcon/>
            </div>
          <div style={{ marginTop: '12px', marginLeft: '8px' }}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={25}
              activeColor="#ffd700"
              style={{ marginTop: "15px " }}
            /></div>
        </AppBar>
      </Box>
    </div>
  )
}
export default Navigation