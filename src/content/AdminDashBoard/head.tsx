import { Box } from '@mui/system'
import React from 'react'
import ImageList from '../../ImageData.json'
import Classes from './head.module.css'
import { Button, Dialog, MenuItem, TextField, Typography, IconButton } from '@mui/material'
import ImageListDialog from './ImageDialog'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import { useDispatch, useSelector } from 'react-redux'
import { ArtGalleryActions } from '../../slice/artgallery'
import { RootState } from '../../store'
import CreateProjectModal from './createProjectModal'
import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/material/styles'


const ConfirmButtonDanger = styled(Button)`
  width: 160px;
  height: 38px;
  background: #ffcbca;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
  color: #ff1a43;
  :hover {
    color: #ff1a43;
    background: #ffcbca;
    opacity: 0.8;
  }
`
const LoadingPlanBtn = styled(LoadingButton)`
  width: 160px;
  height: 38px;
`


const Head = () => {
    const dispatch = useDispatch();
    const { projectType, modals, loading } = useSelector((state: RootState) => state.artGallery)

    const openModalHandler = (row: any) => {
        dispatch(ArtGalleryActions.modalImagesList(row))
        dispatch(ArtGalleryActions.openGalleryModal(true))
    }

    const projectTypeChangeHandler = (e: string) => {
        dispatch(ArtGalleryActions.setProjectType(e))
    }

    const deleteHandler = (row: any) => {
        console.log("row", row)
        dispatch(ArtGalleryActions.openDeleteModal(true))
    }
    const closeDeleteModalHandler = () => {
        dispatch(ArtGalleryActions.openDeleteModal(false))
    }

    const openEditModal = (row: any) => {
        console.log("openEditModal", row)
        dispatch(ArtGalleryActions.openEditProject(true))
    }

    return (
        <>
            {/* projects */}
            <Box sx={{ width: "90%", height: "auto", margin: "4rem auto 3rem auto", display: "flex", alignItems: "center", justifyContent: "space-between", rowGap: "35px", columnGap: "30px", flexWrap: "wrap", }}>
                <TextField
                    size="small"
                    select
                    sx={{ width: "150px" }}
                    defaultValue={"all"}
                    value={projectType}
                    onChange={(e: any) => projectTypeChangeHandler(e.target.value)}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="ongoing">Ongoing</MenuItem>
                </TextField>
                <Button variant='contained' sx={{ width: "150px" }}
                    onClick={() => {
                        dispatch(ArtGalleryActions.openAddProjectsModal(true))
                    }}
                > Add Project</Button>
            </Box>

            <Box sx={{ width: "90%", height: "auto", margin: "0rem auto 5rem auto", display: "flex", alignItems: "center", justifyContent: "center", rowGap: "35px", columnGap: "30px", flexWrap: "wrap" }}>
                {ImageList.map((row) => {
                    return <Box
                        //  data-aos="fade-up"
                        //     data-aos-duration="800"
                        className={Classes.card}
                        key={row.id} sx={{
                            width: "250px", height: "350px",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            borderRadius: "6px", display: "flex", alignItems: "cener", justifyContent: "center"
                        }}>

                        <Box key={row.id} sx={{
                            width: "98%", height: "300px",
                            background: `url(${row?.media[0]}) no-repeat center center/cover`,
                            margin: "auto", borderRadius: "6px", cursor: "pointer"
                        }}>
                            <Typography onClick={() => openModalHandler(row)} align='center' variant='h5' className={Classes.cardname}>Mangalore</Typography>

                            <Box className={Classes.insidecardbox} sx={{
                                width: "100%", height: "100%",
                            }} >
                                {/* <img className={Classes.insidecard} src={row?.url} height="100%" width="100%" alt={row?.name} /> */}
                                <Box className={Classes.insidecard} sx={{
                                    width: "98%", height: "98%",
                                    background: `url(${row?.media[0]}) no-repeat center center/cover`,
                                    margin: "auto", borderRadius: "6px", cursor: "pointer"
                                }} ></Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: "100$", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 15px" }}>
                            <Button onClick={() => { openEditModal(row) }} variant='contained' size='small'>Edit</Button>
                            <Button size='small' variant='outlined' onClick={() => { deleteHandler(row) }}>Delete</Button>
                        </Box>
                    </Box>
                })}
                <ImageListDialog />
                <CreateProjectModal />

                {/* delete project */}
                <Dialog open={modals.openDeleteModal || false}>
                    <Box sx={{
                        width: {
                            xs: '300px',
                            sm: '525px',
                            md: '525px',
                            lg: '550px',
                            xl: '550px',
                        },
                        height: 'auto', padding: "10px 10px 20px 10px"
                    }}>

                        <IconButton
                            sx={{ borderRadius: '50%', position: "absolute", top: 0, right: 5 }}
                            onClick={closeDeleteModalHandler}
                        >
                            <HighlightOffRoundedIcon color='primary' />
                        </IconButton>
                        <Box
                            sx={{
                                fontFamily: 'Roboto',
                                position: 'relative',
                                // boxShadow:
                                //     '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
                                borderRadius: '6px',
                                // padding: '10px 10px 20px 10px',


                            }}
                        >     <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: {
                                    xs: '14px',
                                    sm: '22px',
                                    md: '22px',
                                    lg: '22px',
                                    xl: '22px',
                                },
                                color: `#FF1A43`,
                                margin: '10px auto',
                                width: '90%',
                            }}
                        >
                                Would you like to delete this project?
                            </Typography>

                        </Box>
                        <Box
                            sx={{
                                height: 'suto',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '10px',
                            }}
                        >
                            <Box>

                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        // fontSize: '22px',
                                        fontSize: {
                                            xs: '14px',
                                            sm: '22px',
                                            md: '22px',
                                            lg: '22px',
                                            xl: '22px',
                                        },
                                        color: `black`,
                                        margin: '10px auto',
                                        width: '90%',
                                    }}
                                >

                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '14px',
                                            lg: '14px',
                                            xl: '14px',
                                        },
                                        color: '#212121',
                                        margin: '10px auto',
                                        width: '90%',
                                    }}
                                >
                                    This action cannot be undone. Please make sure you are performing the correct operation
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        width: '90%',
                                        height: 'auto',
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        margin: 'auto',
                                        rowGap: '10px',
                                    }}
                                >
                                    <Box
                                        sx={{ width: { xs: '100%', sm: '160px' }, height: 'auto' }}
                                    >

                                    </Box>

                                    {!loading ? <ConfirmButtonDanger>
                                        Confirm
                                    </ConfirmButtonDanger> : (
                                        <LoadingPlanBtn loading>
                                            Confirm
                                        </LoadingPlanBtn>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Dialog>
            </Box >
        </>
    )
}


export default Head