import React from 'react'
import { Box, styled } from "@mui/system";
import {
    Modal, IconButton, TextField, Typography, MenuItem, Button
} from "@mui/material";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store';
import { ArtGalleryActions } from '../../slice/artgallery';



const OptionsDialog = styled(Modal)`
display:flex;

  & .MuiPaper-root.MuiPaper-elevation {
    overflow: visible;
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  ${(props) => props.theme.breakpoints.down("lg")} {
    & .MuiPaper-root.MuiPaper-elevation {
      // height: auto;
    }
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    & .MuiPaper-root.MuiPaper-elevation {
      // height: auto;
      // width: 335px;
    }
  }
`;

const TopWrapper = styled(Box)`
margin:auto;
  width: 50%;
min-height:40%;
max-height:90%;
//   background: #dcb7b7;
background:white;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justifycontent: center;
  gap: 10px;
  position:relative;
  border-radius:6px;
  overflow:scroll;
  ${(props) => props.theme.breakpoints.down("lg")} {
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 90%;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    // width: 250px;
    // height: auto;
  }
`;


const CreateProjectModal = () => {
    const dispatch = useDispatch();
    const { modals, newProject, mediaList } = useSelector((state: RootState) => state.artGallery)


    const handleClose = () => {
        dispatch(ArtGalleryActions.openAddProjectsModal(false))
        dispatch(ArtGalleryActions.clearNewProjectFields())
    }

    const handleChange = (name: string, value: string) => {
        console.log("data", name, value)
        const data = { key: name, value: value }
        dispatch(ArtGalleryActions.createNewProject(data))
    }

    const thumbnailChangeHandler = (e: any) => {
        const files = e.target.files[0]
        dispatch(ArtGalleryActions.createNewProject({ key: "thumbnail", value: files }))
        const bitCode = URL.createObjectURL(files)
        console.log("Bit", bitCode)
        dispatch(ArtGalleryActions.setThumbnailImage(bitCode))
    }

    const handleMediaChange = (e: any) => {
        const files = e.target.files
        // dispatch(
        //     ArtGalleryActions.setMedia([
        //         ...newProject.media,
        //         ...files,
        //     ]),
        // )
        let list = null
        if (files.length) {
            for (let index in files) {
                if (files[index] instanceof File) {
                    list = URL.createObjectURL(files[index])
                    dispatch(ArtGalleryActions.setAssetFiles(list))
                }
            }
        }

    }

    return (
        <OptionsDialog
            id="clone-image-dialog-window"
            sx={{
                backdropFilter: "blur(3px)",
            }}
            open={modals?.openAddProjectsModal}
        // onClose={handleEscape}
        >
            <TopWrapper>
                {/* close icon */}
                <IconButton
                    id="close-btn-clone-image-dialog"
                    onClick={handleClose}
                    size="medium"
                    disableRipple
                    disableFocusRipple
                    style={{
                        borderRadius: "100%",
                        display: "flex",
                        position: "absolute",
                        boxShadow: "none",
                        top: -2,
                        right: 2,
                    }}
                >
                    <HighlightOffRoundedIcon
                        fontSize='medium'
                    />
                </IconButton>
                {/* close icon */}

                <Box sx={{
                    width: "100%", height: "auto", display: "flex", flexDirection: "column", rowGap: "20px"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography>
                            Project Title
                        </Typography>
                        <TextField
                            onChange={(e: any) => handleChange("title", e.target.value)} name="title"
                            value={newProject?.title}
                            fullWidth
                            size='small'
                            label="" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography>
                            Project Description (Optional)
                        </Typography>
                        <TextField
                            onChange={(e: any) => handleChange("description", e.target.value)}
                            name="description"
                            value={newProject?.description}
                            fullWidth
                            size='small'
                            label="" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography>
                            Project Type
                        </Typography>
                        <TextField
                            size="small"
                            name="type"
                            select
                            defaultValue={"completed"}
                            fullWidth
                            value={newProject?.type}
                            onChange={(e: any) => handleChange("type", e.target.value)}
                        >

                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="ongoing">Ongoing</MenuItem>
                        </TextField>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography>
                            Thumbnail
                        </Typography>
                        <input onChange={thumbnailChangeHandler} type="file" accept='image/png, image/jpg, image/jpeg' />
                        {newProject?.thumbnailImg && <Box sx={{ width: "200px", height: "200px" }}>
                            <img width="100%" height="100%" alt=" thumbnail" src={newProject?.thumbnailImg} />
                        </Box>}
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Typography>
                            Project Images
                        </Typography>
                        <input onChange={handleMediaChange} type="file" accept='image/png, image/jpg, image/jpeg' multiple />
                        {mediaList.length > 0 && <Box sx={{ display: "flex", rowGap: "15px", columnGap: "15px", flexWrap: "wrap", width: "100%", height: "auto", justifyContent: "center" }}>
                            {mediaList.map((row, index) => {
                                return <Box key={index} sx={{ width: "200px", height: "200px" }}>
                                    <img width="100%" height="100%" alt=" thumbnail" src={row} />
                                </Box>
                            })}

                        </Box>}
                    </Box>
                    <Box sx={{ width: "100%", height: "auto", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                        <Button disabled={(newProject?.title !== "" && mediaList.length > 0 && newProject?.thumbnailImg !== "") ? false : true}
                            variant='contained'>Add Project</Button>
                    </Box>
                </Box>
            </TopWrapper>
        </OptionsDialog >
    )
}

export default CreateProjectModal