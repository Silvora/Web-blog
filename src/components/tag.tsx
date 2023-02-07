import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SellIcon from '@mui/icons-material/Sell';
import Chip from '@mui/material/Chip';
import Zoom from '@mui/material/Zoom';
export default function Tag(props:any) {
  const {data} = props
  return (
    <Zoom in timeout={500} style={{ transitionDelay: '700ms' }}>
    <Paper elevation={3} sx={{padding:"12px"}}>
    <Box>
    <Stack direction="row" sx={{marginBottom:"8px"}}>
      <SellIcon/><span style={{paddingLeft:"8px"}}>热点标签</span>
      </Stack>
      
{
  data.map((item:any)=>{
    return (
      <Chip label={item.name} color="success" sx={{marginRight:"4px",marginBottom:"4px",cursor:"pointer"}} key={item.id}/>
    )
  })
}
{/* <Chip label="success" color="success" sx={{marginRight:"4px"}}/>
<Chip label="primary" color="primary" variant="outlined" sx={{marginRight:"4px"}}/>
<Chip label="success" color="success" variant="outlined" sx={{marginRight:"4px"}}/> */}
      </Box>

  </Paper>
  </Zoom>
  )
}
