import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardActionArea } from '@mui/material';
import Slide from '@mui/material/Slide';

import Context from '@/context/global';

export default function SearchListItem(props:any) {


  const {data} = props

  const {setMarkdown} = useContext(Context)
  
  const handleMarkdown = ()=>{
    setMarkdown(true)
  }

  return (
    <>

      {data.map((item:any,idx:any) => (
         
          <Slide direction="up" in timeout={1000*(idx+1)} key={item.id}>
          <Card  sx={{margin:"8px 0"}} variant="outlined" onClick={handleMarkdown}>
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
