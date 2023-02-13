import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';

import Context from "@/context/global"
import { GetRead } from '@/api/request';
export default function User() {

  const {contextLen,classLen} = useContext(Context)
  const [total,setTotal] = useState<any>()
  useEffect(()=>{
    GetRead().then((result:any) => {
      console.log(result);
      setTotal(result.readTotal)
    }).catch((err) => {
      console.log(err)
    });
  },[])

  return (
    <Zoom in timeout={500} style={{ transitionDelay: '500ms' }}>
 
    <Paper elevation={3} sx={{padding:"24px 0"}}>
            <Box height={80}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{width: 80, height: 80,margin:"0 auto" }}/>
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
        <p>{contextLen}</p>
       </Box>
       <Box>
       <p style={{fontSize:"18px",fontWeight:"bold"}}>分类</p>
        <p>{classLen}</p>
       </Box>
       <Box>
       <p style={{fontSize:"18px",fontWeight:"bold"}}>阅读</p>
        <p>{total}</p>
       </Box>
      </Stack>
          </Paper>
          </Zoom>
  )
}
