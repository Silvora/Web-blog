import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import { padding } from '@mui/system';

export default function SearchList() {
  return (
   <Box sx={{height:"615px"}}>
     <List
    sx={{
      width: '100%',
       position: 'relative',
        overflow: 'auto',
      height:"600px",
      padding:'0',
    }}
  >
    {[0, 1, 2, 3, 4,5,6,7,8,9].map((sectionId) => (
      <li key={`section-${sectionId}`}>
        
        <ul>
        <ListSubheader sx={{padding:"0"}}>
            {/* <Typography style={{height:"40px"}}>dddd</Typography> */}
            {/* <Paper elevation={0} sx={{padding:"10px 0",fontSize:"1.5rem",color:""}}>Title</Paper>          */}

  
  <Typography color="primary" sx={{fontSize:"1.5rem",fontWeight:"bold",backgroundColor:"transparent"}}>Breadcrumbs</Typography>

          </ListSubheader>
          
          {[0, 1, 2].map((item) => (
            <Card key={`item-${sectionId}-${item}`} sx={{margin:"8px 0"}} variant="outlined">
              <CardActionArea>
                <CardHeader title="Shrimp and Chorizo Paella"></CardHeader>
                
              </CardActionArea>
            </Card>
          ))}
        </ul>
      </li>
    ))}
  </List>
   </Box>
  )
}
