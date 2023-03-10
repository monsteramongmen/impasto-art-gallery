import React, { useState, useCallback } from 'react'
import { Box, styled } from "@mui/system";
import {
  Modal, IconButton
} from "@mui/material";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store';
import { ArtGalleryActions } from '../../../slice/artgallery';
import ImageViewer from "react-simple-image-viewer"

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
  width: 90%;
  height: 90%;
  background: #dcb7b7;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justifycontent: center;
  gap: 10px;
  position:relative;
  border-radius:6px;
  ${(props) => props.theme.breakpoints.down("lg")} {
  }
  ${(props) => props.theme.breakpoints.down("md")} {
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    // width: 250px;
    // height: auto;
  }
`;


const ImageListDialog = () => {
  const dispatch = useDispatch();
  const { modals, modalImagesList } = useSelector((state: RootState) => state.artGallery)
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleClose = () => {
    dispatch(ArtGalleryActions.openGalleryModal(false))
    dispatch(ArtGalleryActions.modalImagesList({}))
  }

  return (
    <OptionsDialog
      id="clone-image-dialog-window"
      sx={{
        backdropFilter: "blur(3px)",
      }}
      open={modals.openGalleryModal}
    // onClose={handleEscape}
    >
      <TopWrapper>
        {/* close icon */}
        <IconButton
          id="close-btn-clone-image-dialog"
          onClick={handleClose}
          size="small"
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

        {/* images */}
        <Box sx={{ overflow: "scroll", width: "100%", height: "100%", marginTop: "10px", marginBottom: "5px", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", rowGap: { xs: "20px", sm: "20px", md: "10px" }, columnGap: "20px" }}>
          {modalImagesList?.media?.map((row, index) => {
            return <Box onClick={() => { openImageViewer(index) }} key={index} sx={{ height: "300px", width: "250px", borderRadius: "6px", background: `url(${row}) no-repeat center center/cover`, }}>
            </Box>
          })}
        </Box>
        {isViewerOpen && (
          <ImageViewer
            src={modalImagesList?.media || []}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}

      </TopWrapper>
    </OptionsDialog>
  )
}

export default ImageListDialog