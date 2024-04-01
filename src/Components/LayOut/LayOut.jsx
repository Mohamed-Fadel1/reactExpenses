import React, { useState } from "react";
import styles from "./LayOut.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Drawerr from "../Drawerr/Drawerr";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export default function LayOut() {
  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode

            mohamed: {
              main: "#1565c0",
              text: "#2196f3",
              bgColor: "#e0e0e0",
            },
          }
        : {
            // palette values for dark mode

            mohamed: {
              main: "#00838f",
              text: "#00acc1",
              bgColor: "#424242",
            },
          }),
    },
  });

  const drawerWidth = 240;
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar {...{ setDrawerType, setNoneOrBlock, drawerWidth }} />
        <Drawerr
          {...{
            setDrawerType,
            setNoneOrBlock,
            drawerType,
            noneOrBlock,
            drawerWidth,
            setMyMode,
          }}
        />
        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}
