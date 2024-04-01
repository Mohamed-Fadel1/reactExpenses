import React from "react";
import styles from "./Drawerr.module.css";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

export default function Drawerr({
  drawerWidth,
  setMyMode,
  noneOrBlock,
  drawerType,
  setNoneOrBlock,
  setDrawerType
}) {


const array = [
  { name : "Home" , icon :  <Home /> , path : "/home" } ,
  { name : "Create" , icon :    <Create /> , path : "/create" } ,
  { name : "Profile" , icon :   <Person2 /> , path : "/profile" } ,
  { name : "Settings" , icon :   <Settings /> , path : "/Settings" } ,
]

  const currentLocation = useLocation();

  console.log(currentLocation.pathname);

  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          display: { xs: noneOrBlock, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open="true"
        onClose={() => {
          setDrawerType ("permanent")
          setNoneOrBlock("none");
        }}
      >
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
          <Divider />



          {array.map((item , index)=>{
            return (
              <ListItem
              key={index}
              sx={{
                backgroundColor:
                  currentLocation.pathname === item.path
                    ? theme.palette.mohamed.bgColor
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate (item.path);
                }}
              >
                <ListItemIcon>
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary= {item.name} />
              </ListItemButton>
            </ListItem>
  
            )
          })}


          

  


    



          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
