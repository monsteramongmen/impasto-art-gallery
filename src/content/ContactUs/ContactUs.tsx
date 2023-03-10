import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  return (
    <Box sx={{ width: "90%", height: "auto", margin: "5rem auto 0 auto", display: "flex", alignItems: "flex-start", justifyContent: "center", rowGap: "35px", columnGap: "30px", flexWrap: "wrap", flexDirection: "column" }}>
      <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>Contact Us  <Box sx={{ height: "3px", width: "100px", background: "#1976d2", borderRadius: "6px" }}></Box></Typography>

      <Typography align='left' sx={{ fontSize: "20px", width: "100%" }}>Do you have any questions on products, orders, policies, processes, our website etc. or need any other help?
        <br />
        <br />
        Please feel free to contact us using any of the following means.
      </Typography>

      <Box sx={{ width: "100%", rowGap: "5rem", padding: "4rem 10px", height: "auto", display: "flex", flexWrap: "wrap" }}>
        <Box sx={{ width: { xs: "100%", md: "100%", }, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography align='center' sx={{ fontSize: "20px", width: "100%" }}>Milagres Cross Road
            <br />
            <br />
            Hampankatta Mangalore
            <br />
            <br />
            Karnataka, India 575001
          </Typography>
        </Box>
        {/* <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%", }, height: "100%", display: "flex", alignItems: "center", rowGap: "20px", justifyContent: "center", }}>
          <Box sx={{ rowGap: "20px", width: "100%", height: "auto", display: "flex", flexDirection: "column" }}>
            <Box sx={{ columnGap: "20px", display: "flex", width: "100%", flexDirection: { xs: "column", md: "row" }, rowGap: "20px" }}>
              <TextField fullWidth sx={{ width: { xs: "100%", sm: "100%", md: "70%" } }} size='small' label="Email" required placeholder='enter email addredd' />
            </Box>
            <TextField fullWidth multiline
              rows={2}
              maxRows={4} size='small' label="Message" required placeholder='enter your message' sx={{ width: { xs: "100%", sm: "100%", md: "70%" } }} />
            <Button variant="contained" sx={{ width: { xs: "100%", sm: "100%", md: "70%" } }}>Send mail</Button>
          </Box>
        </Box> */}

      </Box>
    </Box >
  )
}

export default ContactUs