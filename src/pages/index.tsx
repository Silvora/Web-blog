import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import User from '@/components/user';
import Notice from '@/components/notice';
import Tag from '@/components/tag';
import List from '@/components/list';
import Zoom from '@mui/material/Zoom';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRef, useState } from 'react';

import Markdown from '@/components/markdown';

export default function Home() {

  const [code,setCode] = useState({})
  const [open,setOpen] = useState(false)
  const handleItem = (data:any)=>{
    //console.log(data)
    setOpen(true)
    setCode({
      id:data,
      title:"a1a11s",
      text:`This is a [Next.js](https://nextjs.org/) project bootstrapped with (https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

      ## Getting Started
      
      First, run the development server:`
      
      
    })
  }

  const handleMarkdown=(val:any)=>{
    setOpen(val)
  }

  return (
    <>
    <Markdown code={code} handleMarkdown={handleMarkdown} open={open}/>
    <Slide direction='up' in>
     <Box sx={{padding:"24px",height:"calc(100vh - 64px)"}}>
      <Grid container spacing={3}>
        
        <Grid item xs={12}  md={4} lg={3}>
         
         <User></User>
         <Notice></Notice>
          <Tag></Tag>
          
        </Grid>
        <Grid item xs={12} md={8} lg={9} >
          
          <List handleItem={handleItem}></List>
        </Grid>
      </Grid>
    </Box>
    </Slide>
    </>
  )
}
