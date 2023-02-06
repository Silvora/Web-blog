import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Grow from '@mui/material/Grow';
import Context from "@/context/global"
export default function List() {

    const {setMarkdown,setCode} = useContext(Context)
    const data = [1,2,3,4,5,6,7,8,9]
    const handleMarkdownItem = (item:any)=>{
   
     setCode({
      id:data,
      title:"a1a11s",
      text:`This is a [Next.js](https://nextjs.org/) project bootstrapped with (https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

      ## Getting Started
      
      First, run the development server:`
      
      
    })
     setMarkdown(true)
    }

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
    data.map((item:any)=>{
        return (
            <Grow in style={{ transformOrigin: '0 0 0',transitionDelay: '900ms'}} timeout={800 * item} key={item} onClick={()=>handleMarkdownItem(item)}> 
            
            <Card sx={{marginBottom:"12px",cursor:"pointer"}}>
            <CardActionArea>
            <CardHeader title="Shrimp and Chorizo Paella"
            ></CardHeader>
          <CardActions>
            <Stack direction="row" spacing={1} sx={{color:"#858585"}}>
             <DateRangeIcon/>
            <Box sx={{lineHeight:"24px"}}>2023-11-12 15：45：45 ◦ Vue</Box>
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
