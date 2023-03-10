import { Box } from '@mui/system'
import React from 'react'
import ImageList from '../../ImageData.json'
import Classes from './head.module.css'
import { Typography } from '@mui/material'
// import ImageListDialog from './ImageDialog'
import ImageViewer from "react-simple-image-viewer"

import { useDispatch, useSelector } from 'react-redux'
import { ArtGalleryActions } from '../../slice/artgallery'
import ContactUs from '../ContactUs/ContactUs'
import AboutUs from '../AboutUs/AboutUs'
import { RootState } from '../../store'

const Head = () => {
    const dispatch = useDispatch();
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const { modalImagesList } = useSelector((state: RootState) => state.artGallery)
    const [convertedImg, setConvertedImg] = React.useState<string[]>([]);

    const openModalHandler = (row: any) => {
        dispatch(ArtGalleryActions.modalImagesList(row))
        dispatch(ArtGalleryActions.openGalleryModal(true))
        setTimeout(() => {
            setIsViewerOpen(true);
        }, 100);
    }

    React.useEffect(() => {
        if (modalImagesList?.media?.length) {
            modalImagesList?.media.forEach((data: any) => {
                setConvertedImg((prev) => [...prev, process.env.PUBLIC_URL + data]);
            })
        } else {
            return;
        }
    }, [modalImagesList?.media]);

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    return (
        <>
            {/* about us */}
            <AboutUs />
            {/* about us */}
            {/* projects */}
            <Box sx={{ width: "90%", height: "auto", margin: "4rem auto 3rem auto", display: "flex", alignItems: "flex-start", justifyContent: "center", rowGap: "35px", columnGap: "30px", flexWrap: "wrap", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>Projects  <Box sx={{ height: "3px", width: "100px", background: "#1976d2", borderRadius: "6px" }}></Box></Typography>
            </Box>

            <Box sx={{ width: "90%", height: "auto", margin: "0rem auto 5rem auto", display: "flex", alignItems: "center", justifyContent: "center", rowGap: "35px", columnGap: "30px", flexWrap: "wrap" }}>
                {ImageList.map((row) => {
                    return <Box
                        //  data-aos="fade-up"
                        //     data-aos-duration="800"
                        className={Classes.card}
                        key={row.id} sx={{
                            width: "250px", height: "300px",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            borderRadius: "6px", display: "flex", alignItems: "cener", justifyContent: "center"
                        }}>

                        <Box key={row.id} sx={{
                            width: "98%", height: "98%",
                            background: `url(${process.env.PUBLIC_URL + row?.media[0]}) no-repeat center center/cover`,
                            margin: "auto", borderRadius: "6px", cursor: "pointer"
                        }}>
                            <Typography onClick={() => openModalHandler(row)} align='center' variant='h5' className={Classes.cardname}>Mangalore</Typography>

                            <Box className={Classes.insidecardbox} sx={{
                                width: "100%", height: "100%",
                            }} >
                                {/* <img className={Classes.insidecard} src={row?.url} height="100%" width="100%" alt={row?.name} /> */}
                                <Box className={Classes.insidecard} sx={{
                                    width: "98%", height: "98%",
                                    background: `url(${process.env.PUBLIC_URL + row?.media[0]}) no-repeat center center/cover`,
                                    margin: "auto", borderRadius: "6px", cursor: "pointer"
                                }} ></Box>
                            </Box>
                        </Box>
                    </Box>
                })}
                {/* <ImageListDialog /> */}
                {isViewerOpen && (
                    <ImageViewer
                        src={convertedImg}
                        // currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)",
                            zIndex: 700
                        }}
                        closeOnClickOutside={true}
                    />
                )}
            </Box>
            {/* projects */}
            {/* contact Us */}
            <ContactUs />
            {/* contact Us */}
        </>
    )
}


export default Head