import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import Alert from '@mui/material/Alert';
import Zoom from '@mui/material/Zoom';
import { GetNotice } from '@/api/request';

export default function Notice() {
  const [data,setData] = useState<any>({})
  useEffect(()=>{
    GetNotice().then((result:any) => {
      setData(result.data)
    }).catch((err) => {
      console.log(err)
    });
  },[])

  return (
    <Zoom in timeout={500} style={{ transitionDelay: '600ms' }}>
    <Paper elevation={3} sx={{padding:"12px",margin:"24px 0",height:"auto"}} >
    <Box>
      <Stack direction="row" sx={{marginBottom:"8px"}}>
      <ViewTimelineIcon/><span style={{paddingLeft:"8px"}}>网站公告</span>
      </Stack>
      <Alert severity={data.type}>{data.context}</Alert>
      </Box>

  </Paper>
  </Zoom>
  )
}
