import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Grow from '@mui/material/Grow';
import Context from "@/context/global"
import { GetMarkdown } from '@/api/request';
export default function List() {
    const {setMarkdown,setCode,setContextLen} = useContext(Context)
 //  const data = [1,2,3,4,5,6,7,8,9]
    const handleMarkdownItem = (item:any)=>{
   
      setCode(item)
      setMarkdown(true)
    }

    const [data,setData]=useState<any>([])

 useEffect(()=>{
  GetMarkdown().then((result) => {
    setData(result.data)
    setContextLen(result.data.length)
  }).catch((err) => {
    console.log(err)
  });
 },[setContextLen])

  return (
   
    <Box sx={{
        height:"calc(100vh - 112px)",
        overflow:"hidden",
        overflowY:"auto",
        "&::-webkit-scrollbar":{
            display:"none",   
        }
      }}>
   
    
   {
    data.map((item:any,idx:any)=>{
        return (
            <Grow in style={{ transformOrigin: '0 0 0',transitionDelay: '500ms'}} timeout={800 + (idx*100)} key={item.uid} onClick={()=>handleMarkdownItem(item)}> 
            
            <Card sx={{marginBottom:"12px",cursor:"pointer"}}>
            <CardActionArea>
            <CardHeader title={item.title}
            ></CardHeader>
          <CardActions>
            <Stack direction="row" spacing={1} sx={{color:"#858585"}}>
             <DateRangeIcon/>
            <Box sx={{lineHeight:"24px"}}>{item.createTime} ◦ {item.class}</Box>
            </Stack>
            
          </CardActions>
          </CardActionArea>
        </Card>
      
         </Grow>
        )
    })
   }
    </Box>
  )
}
