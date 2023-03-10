import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom';
import Banner from '../../assets/images/banner4.jpg';


const Hero = () => {
    const params = useLocation();

    return (
        <>
            {!params.pathname.includes("/admin") &&
                <Box sx={{ width: "100vw", height: "70vh" }}>
                    <img src={Banner} width="100%" height="100%" alt='banner' />
                </Box>
            }
        </>
    )
}


export default Hero