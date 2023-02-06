import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import Alert from '@mui/material/Alert';
import Zoom from '@mui/material/Zoom';

export default function Notice() {
  return (
    <Zoom in timeout={500} style={{ transitionDelay: '600ms' }}>
    <Paper elevation={3} sx={{padding:"12px",margin:"24px 0",height:"auto"}} >
    <Box>
      <Stack direction="row" sx={{marginBottom:"8px"}}>
      <ViewTimelineIcon/><span style={{paddingLeft:"8px"}}>网站公告</span>
      </Stack>
      <Alert severity="warning">This is a warning alert — check it outwarning alert — check it outwarning alert — check it outwarning alert — check it outwarning alert — check it out!</Alert>
      </Box>

  </Paper>
  </Zoom>
  )
}
