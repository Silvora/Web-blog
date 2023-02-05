import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Zoom from '@mui/material/Zoom';
import Grow from '@mui/material/Grow';

export default function List(props:any) {

    const {handleItem} = props
    const data = [1,2,3,4,5,6,7,8,9]
    const handleMarkdownItem = (item:any)=>{
      handleItem(item)
    }

  return (
    // <Zoom in timeout={700} style={{ transitionDelay: '1400ms' }}>
    <Box sx={{
        height:"calc(100vh - 112px)",
        overflow:"hidden",
        overflowY:"auto",
        "&::-webkit-scrollbar":{
            display:"none",   
        }
      }}>
     {/* <Grow in style={{ transformOrigin: '0 0 0' }} timeout={10000}> */}
    
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
   {/* </Grow> */}
    {/* <Card>
        <CardHeader title="Shrimp and Chorizo Paella"
        ></CardHeader>
      <CardActions>
        <Stack direction="row" spacing={1} sx={{color:"#ccc"}}>
        <DateRangeIcon/>
        <span>2023-11-12 15：45：45</span>
        <span> ◦</span>
        <span>Vue</span>
        </Stack>
        
      </CardActions>
    </Card> */}
    {/* </Grow> */}
    </Box>
    
    // </Zoom>
  )
}
