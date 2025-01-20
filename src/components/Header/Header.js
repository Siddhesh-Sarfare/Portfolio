import { ThemeProvider } from "@emotion/react";
import MenuOutlinedIcon from "@mui/icons-material/Menu";
import {
  createTheme,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountLogo from "../AccountLogo/AccountLogo";
import "./Header.css";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useRef(null);

  // Use the custom hook to close the menu when clicking outside
  // useOutsideClick(menuRef, () => setIsMenuOpen(false));

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const theme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent", // Remove hover effect globally
            },
          },
        },
      },
    },
  });
  return (
    <>
      <div className="items-center w-full h-auto min-h-16 px-[5%] flex sticky top-0 navbar-wrapper bg-transparent">
        <div className="container m-auto bg-transparent header">
          <div className="bg-transparent header-logo">
            <AccountLogo />
          </div>
          <IconButton
            onClick={toggleDrawer(true)}
            className="menu-toggle"
            aria-label="Open navigation menu"
          >
            <MenuOutlinedIcon
              className="bg-transparent menu-icon"
              fontSize="large"
              style={{ color: "white" }}
            />
          </IconButton>

          {/* Material-UI Drawer for right-side menu */}
          <ThemeProvider theme={theme}>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              className="bg-transparent border-8 border-blue-500"
              style={{ color: "danger" }}
              PaperProps={{
                sx: {
                  backgroundColor: "#333333", // Set your desired color here
                  color: "white", // Optional: Set text color if needed
                },
              }}
            >
              <List
                className="border-2 border-red-500 bg-[#333333]"
                sx={{
                  width: 250,
                  backgroundColor: "#333333",
                  "&:hover": {
                    backgroundColor: "transparent", // Remove hover background color
                  },
                }}
                onClick={toggleDrawer(false)}
              > 
                <ListItemButton
                  component={Link}
                  className="m-3 bg-transparent border-2 border-red-500 item-text"
                  to="/"
                >
                  <ListItemText
                    className="m-3 bg-transparent border-2 border-red-500 item-text"
                    primary="Home"
                  />
                </ListItemButton>
                <ListItemButton component={Link} to="/portfolio">
                  <ListItemText className="item-text" primary="Portfolio" />
                </ListItemButton>
                <ListItemButton component={Link} to="/about">
                  <ListItemText className="item-text" primary="About" />
                </ListItemButton>
                <ListItemButton component={Link} to="/contact">
                  <ListItemText className="item-text" primary="Contact" />
                </ListItemButton>
              </List>
            </Drawer>
          </ThemeProvider>
        </div>
      </div>
      <div className="opacity-0 mix-blend-darken bg-[#a5f3fc] w-full h-40 fixed top-0 nav-node"></div>
    </>
  );
};

export default Header;
