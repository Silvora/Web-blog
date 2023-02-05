import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SellIcon from '@mui/icons-material/Sell';
import Chip from '@mui/material/Chip';
import Zoom from '@mui/material/Zoom';
export default function Tag() {
  return (
    <Zoom in timeout={500} style={{ transitionDelay: '700ms' }}>
    <Paper elevation={3} sx={{padding:"12px"}}>
    <Box>
    <Stack direction="row" sx={{marginBottom:"8px"}}>
      <SellIcon/><span style={{paddingLeft:"8px"}}>热点标签</span>
      </Stack>
      {/* <Divider></Divider> */}
      
<Chip label="primary" color="primary" sx={{margin:"6px 6px 6px 0"}}/>
<Chip label="success" color="success" sx={{marginRight:"4px"}}/>
<Chip label="primary" color="primary" variant="outlined" sx={{marginRight:"4px"}}/>
<Chip label="success" color="success" variant="outlined" sx={{marginRight:"4px"}}/>
      </Box>

  </Paper>
  </Zoom>
  )
}
