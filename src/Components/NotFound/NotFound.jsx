import React from 'react'
import styles from "./NotFound.module.css"
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function NotFound() {
  const theme = useTheme()
  return (
  <Box>


<Typography color={theme.palette.error.main} sx={{mt :"100px"}} variant="h4"> ooops ! There is No Design 
<br />
<br />
<br />

Please try again later ...!
 </Typography>

  </Box>
  )
}
