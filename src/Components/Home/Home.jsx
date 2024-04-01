import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function Home() {
  const [mydata , setMydata] = useState([])

useEffect(()=>{
  fetch (`http://localhost:3000/mydata`)
  .then((response)=>response.json())
  .then((data)=> setMydata(data))
} , [mydata])



async function deleteData(id)
{
  await fetch(`http://localhost:3000/mydata/${id}` ,{
    method :"DELETE" 
  })

}

let totalPrice = 0


  return (
    <>
      <Box>


{mydata.map((ele)=>{
  totalPrice += ele.price
  return (
    <Paper
    key={ele.id}
    sx={{
      width: "370px",
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "30px",
      paddingBottom: "15px",
      mt:"50px" ,
      position :"relative" , 
    
    }}
  >
    <Typography sx={{ml:"16px"}} variant="h6"> {ele.title} </Typography>
    <Typography  sx={{mr:"33px" , opacity:"0.8" }} variant="h6">${ele.price}</Typography>
    <IconButton onClick={()=>deleteData(ele.id)} sx={{position:"absolute" ,  top :"0" , right:"0"}}> <Close/> </IconButton>
  </Paper>
  )
})}


      <Typography mt="55px" textAlign="center" variant="h5">&#128073; You Spend $ {totalPrice} </Typography>
      </Box>
    </>
  );
}
