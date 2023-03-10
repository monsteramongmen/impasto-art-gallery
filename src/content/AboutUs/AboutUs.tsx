import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <Box id="aboutus" sx={{ width: "90%", height: "auto", margin: "4rem auto", display: "flex", alignItems: "flex-start", justifyContent: "center", rowGap: "35px", columnGap: "30px", flexWrap: "wrap", flexDirection: "column" }}>
      <Typography sx={{ fontSize: "28px", fontWeight: "600", }}>About Us
        <Box sx={{ height: "3px", width: "100px", background: "#1976d2", borderRadius: "6px" }}></Box></Typography>

      <Typography sx={{ fontSize: "20px", }}>Fine art studio is a team of talenred young personals who aim at quality work and have an eye for imagination and creativity. </Typography>
    </Box>
  )
}

export default AboutUs