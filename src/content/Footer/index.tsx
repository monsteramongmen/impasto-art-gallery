import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'


const Footer = () => {
    return (
        <Box sx={{ background: "#E8E8E8", padding: "1rem 0.5rem", }}>
            <Typography align='center'>
                Copyright © 2023 Impasto Art Studio. All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer