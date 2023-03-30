import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";

import Drawer from "@mui/material/Drawer";

import ListItemText from "@mui/material/ListItemText";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDrawerToggle = () => {
    console.log("hel");
    setMenuOpen(!menuOpen);
  };
  const navItems = ["Services", "About us", "Blogs", "Contact us"];
  const drawer = (
    <Box className="drawer-nav p-8 ">
      <Box className="closebtn flex w-8 h-8 rounded-full justify-center items-center float-right">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z"
            fill="#301E4E"
          />
        </svg>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem className="nav-list-item " key={item} disablePadding>
            <ListItemButton className="text-8xl" sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar className="flex justify-between">
            <Box
              className="h-8 rounded w-8"
              style={{ background: "#301E4E" }}
            ></Box>
            <Box>
              <button className="text-lg mr-8">Contact</button>
              <button className="text-lg mr-8">Work</button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={menuOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "30%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
