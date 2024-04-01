import React, { useState } from "react";
import styles from "./Create.module.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Create() {


const navigate = useNavigate ()


  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  async function getData()
  {
    await fetch(`http://localhost:3000/mydata` ,{
      method :"POST" ,
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify({title , price})
    })
  }



  

  const theme = createTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.mohamed.main,
    "&:hover": {
      backgroundColor: theme.palette.mohamed.text,
      scale: "0.98",
    },
  }));
  return (
    <Box autoComplete="off" component="form" sx={{ width: "350px" }}>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        fullWidth
        label="Transaction Title"
        sx={{ m: 1, mt: "50px", display: "block", mb: "20px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#128073;</InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value));
        }}
        fullWidth
        label="Transaction Title"
        sx={{ m: 1, display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
     <ColorButton onClick={() => { getData(); navigate("/home"); }}


        sx={{ mt: "20px" }}
        variant="contained"
      >
        Custom CSS <ChevronRight />{" "}
      </ColorButton>
    </Box>
  );
}
