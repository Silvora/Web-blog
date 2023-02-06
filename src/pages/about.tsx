import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

import BarChart from '@/components/barChart';
import CloudChart from '@/components/cloudChart';
import LineChart from '@/components/lineChart';
export default function About() {


  

  
  
  




  return (
    <Slide direction='up' in>
    <Box sx={{padding:"24px",height:"calc(100vh - 64px)"}}>
     <Grid container spacing={3}>
       
     <Grid item xs={12} md={8} >
         
         <BarChart/>

       </Grid>

       <Grid item xs={12}  md={4}>
        
      <CloudChart/>
       </Grid>

     </Grid>
     <Box sx={{marginTop:"24px"}}>
      <LineChart/>
     </Box>
   </Box>
   
   </Slide>
  )
}
