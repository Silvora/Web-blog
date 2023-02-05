import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';
export default function User() {
  return (
    <Zoom in timeout={500} style={{ transitionDelay: '500ms' }}>
 
    <Paper elevation={3} sx={{padding:"24px 0"}}>
            <Box height={80}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" sx={{width: 80, height: 80,margin:"0 auto" }}/>
            </Box>
            <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{margin:"24px 0 12px 0",textAlign:"center"}}
      >
       <Box>
        <p style={{fontSize:"18px",fontWeight:"bold"}}>文章</p>
        <p>12</p>
       </Box>
       <Box>
       <p style={{fontSize:"18px",fontWeight:"bold"}}>分类</p>
        <p>9</p>
       </Box>
       <Box>
       <p style={{fontSize:"18px",fontWeight:"bold"}}>标签</p>
        <p>45</p>
       </Box>
      </Stack>
          </Paper>
          </Zoom>
  )
}
