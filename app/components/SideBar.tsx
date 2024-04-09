import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Colors from "../../utils/styles/colors";
import AttachFile from "@mui/icons-material/AttachFile";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import Work from "@mui/icons-material/Work";

const drawerWidth = 64;

interface SideBarProps {
  children: ReactNode;
}

const settings = ["Profile", "Logout"];

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const Drawer = styled(MuiDrawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

export default function SideBar() {
  {
    /* Start AppBar */
  }
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", height: '100vh' , bgcolor: Colors.third}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{bgcolor:Colors.fourth}}>
        <Toolbar>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              {" "}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: Colors.secondary,
                  textDecoration: "none",
                }}
              >
                TessiCareer
              </Typography>
              {/* SpaceBetween */}
              <Box sx={{ flexGrow: 1 }} />
              
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </Toolbar>
      </AppBar>
      {/* End AppBar */}

      {/* Start sidebar */}
      <Drawer variant="permanent">
      <Box sx={{ width: '100%',height: "64px" }}/>
        <List>
          {[
            {
              text: "Dashboard",
              icon: <Home />,
            },
            {
              text: "Mon espace carrière",
              icon: <Work />,
            },
            {
              text: "Mon C.V.",
              icon: <AttachFile />,
            },
            {
              text: "Référentiels",
              icon: <CreateNewFolder />,
            },
            {
              text: "Collaborateurs",
              icon: <Person />,
            },
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                    color: Colors.secondary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* End sidebar */}
    </Box>
  );
}
