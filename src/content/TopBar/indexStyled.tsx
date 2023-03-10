import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const SideBarDrawer = styled(Drawer)`
  background: none;
  flexshrink: 0;
  margin-top: 10vh;
  z-index: 5;
  & .MuiDrawer-paper {
    width: 70%;
    boxsizing: border-box;
    margin-top: 10vh;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    & .MuiDrawer-paper {
      width: 35%;
    }
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    display: none;
  }
`;
export const DrawerContainer = styled(Box)`
  width: 100%;
  height: 100%;
`;
