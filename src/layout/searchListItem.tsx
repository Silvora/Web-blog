import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardActionArea } from '@mui/material';
import Slide from '@mui/material/Slide';

import Context from '@/context/global';

export default function SearchListItem(props:any) {

  const {data} = props

  const {setMarkdown,setCode} = useContext(Context)
  
  const handleMarkdown = (item:any)=>{
    console.log(item);
    setMarkdown(true)
    setCode(item)
  }

  return (
    <>

      {data.map((item:any,idx:any) => (
         
          <Slide direction="up" in timeout={1000+(idx+100)} key={item.id}>
          <Card  sx={{margin:"8px 0"}} variant="outlined" onClick={()=>handleMarkdown(item)}>
            <CardActionArea>
              <CardHeader title={item.title}></CardHeader>
              
            </CardActionArea>
          </Card>
          </Slide>
        ))
      }
        </>
  )
}
