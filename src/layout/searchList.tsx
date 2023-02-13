import React, { useEffect,useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import ClassIcon from '@mui/icons-material/Class';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SearchListItem from './searchListItem';

export default function SearchList(props:any) {

  const {data} = props
  //const [data,setData] = useState<any>([])


  

  // useEffect(()=>{

  
   
  // },[])

  return (
    <>
  {data.length? <Box sx={{height:"615px"}}>
     <List
    sx={{
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      height:"600px",
      padding:'0',
    }}
  >
    {data.map((item:any,idx:any) => (
      <li key={item.id}>
        
        <ul>
        <Slide direction="up" in timeout={800+(idx*100)}>
        <ListSubheader sx={{padding:"0"}}>
            {/* <Typography style={{height:"40px"}}>dddd</Typography> */}
            {/* <Paper elevation={0} sx={{padding:"10px 0",fontSize:"1.5rem",color:""}}>Title</Paper>          */}

  
  <Typography color="primary" sx={{fontSize:"1.5rem",fontWeight:"bold",backgroundColor:"transparent"}}>{item.title}</Typography>

          </ListSubheader>
          </Slide>
          
          <SearchListItem data={item.children}></SearchListItem>
        </ul>
      </li>
    ))}
  </List>
   </Box>:<Box sx={{height:"615px",fontSize:"1.5rem",padding:"15px"}}>
   <Stack
        direction="column"
        spacing={4}
        justifyContent="center"
  alignItems="center"
      >
        <Box sx={{display:"flex",}}>
          <KeyboardReturnIcon sx={{height:"48px",}}/> <span style={{padding:"0 12px",lineHeight:"48px"}}>确认搜索</span>
        </Box>
        <Box sx={{display:"flex"}}>
        <ClassIcon sx={{height:"48px"}}/> <span style={{padding:"0 12px",lineHeight:"48px"}}>动态分类</span>
        </Box>
        <Box>...</Box>
      </Stack>
    </Box>}
   </>
  )
}
