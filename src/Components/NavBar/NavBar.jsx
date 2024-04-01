import React from "react";
import styles from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Link, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function NavBar({ drawerWidth, setNoneOrBlock, setDrawerType }) {
  return (
    <>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            onClick={() => { 
            
              setNoneOrBlock("block");
              setDrawerType ("temporary")
            }}
            sx={{ display: { sm: "none" } }}
            aria-label=""
          >
            <Menu />
          </IconButton>
          <Link
            color="inherit"
            sx={{
              textDecoration: "none",
              flexGrow: 1,
              "&:hover": { fontSize: "17px" },
            }}
            href="/"
          >
            {" "}
            my expenses{" "}
          </Link>

          <Typography sx={{ mr: "16px" }} variant="body1" color="inherit">
            Mohamed Fadel
          </Typography>
          <Avatar
            alt="Mohamed Fadel"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
