import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Menu,
  MenuItem,
  Hidden,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from '../../assets/images/ImpastoLogo.svg';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();


  return (
    <>
      {" "}
      <AppBar id="homeAppbar" position="static" color="primary" sx={{ position: "sticky", top: 0, zIndex: 600 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", position: "relative", top: 0, left: 0
          }}
        >
          <Hidden only={["xs", "sm"]}>
            <Box sx={{ width: "10%", height: "10%" }} onClick={() => { navigate("/"); }}>
              <img src={logo} alt="impasto-logo" width="100%" height="100%" />
            </Box>
            <Stack direction="row" spacing={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => navigate("/")}
              >
                <HomeIcon />
              </IconButton>
              <Button onClick={() => navigate('/')} color="inherit">
                <a href="#aboutus" style={{ textDecoration: "none", color: "white" }}>
                  About Us
                </a>
              </Button>
              <Button
                color="inherit"
                id="resources-button"
                aria-controls={open ? "resources-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}
              >
                Projects
              </Button>
              <Button onClick={() => navigate('/')} color="inherit">
                <a href="#contactus" style={{ textDecoration: "none", color: "white" }}>
                  Contact Us
                </a>
              </Button>
            </Stack>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              MenuListProps={{
                "aria-labelledby": "resources-button",
              }}
            >
              <MenuItem onClick={() => {
                navigate('/completed-projects')
                handleClose();
              }}>Completed Projects</MenuItem>
              <MenuItem onClick={() => {
                navigate('/ongoing-projects')
                handleClose();
              }}>Ongoing Projects</MenuItem>
            </Menu>

            {/* social media */}
            <Stack direction="row" spacing={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => {
                  window.open("https://www.instagram.com/impasto_artstudio/") ||
                    window.open("https://www.instagram.com/impasto_artstudio/");
                }}
              >
                <InstagramIcon />
              </IconButton>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
              >
                <TwitterIcon />
              </IconButton> */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => {
                  window.open("https://www.facebook.com/impastoartstudio") ||
                    window.open("https://www.facebook.com/impastoartstudio");
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            ><Box sx={{ width: "30%", height: "30%" }} onClick={() => { navigate("/"); }}>
                <img src={logo} alt="impasto-logo" width="100%" height="100%" />
              </Box>
              {!mobileMenu ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                  onClick={() => setMobileMenu(true)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                  onClick={() => setMobileMenu(false)}
                >
                  <CloseIcon />
                </IconButton>
              )}
              {mobileMenu && <Box sx={{ position: "absolute", right: 0, height: "350px", width: "100%", background: "white", transform: "translateY(58%)", zIndex: 800, padding: "1rem" }}>
                <Box sx={{ width: "100$", height: "100%" }}>
                  <Stack direction="column" spacing={2}>

                    <Button disableRipple onClick={() => {
                      navigate('/')
                      setMobileMenu(false)
                    }} color="inherit" sx={{ color: "black" }}>
                      <a href="#aboutus" style={{ color: "black", textDecoration: "none", }}>
                        Home
                      </a>
                    </Button>
                    <Button onClick={() => {
                      navigate('/')
                      setMobileMenu(false)
                    }} color="inherit">
                      <a href="#aboutus" style={{ textDecoration: "none", color: "black" }}>
                        About Us
                      </a>
                    </Button>

                    <Button onClick={() => {
                      navigate('/completed-projects')
                      setMobileMenu(false)
                    }} color="inherit">
                      <Typography style={{ color: "black" }}>
                        Completed Projects
                      </Typography>
                    </Button>
                    <Button onClick={() => {
                      navigate('/ongoing-projects')
                      setMobileMenu(false)
                    }} color="inherit">
                      <Typography style={{ color: "black" }}>
                        Ongoing Projects
                      </Typography>
                    </Button>
                    <Button onClick={() => {
                      navigate('/')
                      setMobileMenu(false)
                    }} color="inherit">
                      <a href="#contactus" style={{ textDecoration: "none", color: "black" }}>
                        Contact Us
                      </a>
                    </Button>
                    <Box sx={{ width: "100%", height: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        onClick={() => {
                          setMobileMenu(false)
                          window.open("https://www.instagram.com/impasto_artstudio/") ||
                            window.open("https://www.instagram.com/impasto_artstudio/");
                        }}
                      >
                        <InstagramIcon sx={{ color: "black" }} />
                      </IconButton>
                      {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        onClick={() => {
                          setMobileMenu(false)
                        }}
                      >
                        <TwitterIcon sx={{ color: "black" }} />
                      </IconButton> */}
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="logo"
                        onClick={() => {
                          setMobileMenu(false)
                          window.open("https://www.facebook.com/impastoartstudio") ||
                            window.open("https://www.facebook.com/impastoartstudio");
                        }}
                      >
                        <FacebookIcon sx={{ color: "black" }} />
                      </IconButton>
                    </Box>
                  </Stack>

                </Box>
              </Box>}
            </Stack>
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* mobile version */}

    </>
  );
};

export default TopBar;
