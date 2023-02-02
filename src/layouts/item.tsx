import React,{useState,forwardRef} from 'react'
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from "@mui/material/Chip";
import DateRangeIcon from '@mui/icons-material/DateRange';

import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Typography from '@mui/material/Typography';



import Markdown from "./markdown"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Item(props:any) {
   // console.log(props)
    const {data,index} = props.data

    const [open, setOpen] = useState(false);
    const [context, setContext] = useState<any>({});

    const handleOpen = (data:any)=>{
      setContext(data)
      setOpen(true)
    }

    const handleClose = () => {
      console.log("first");
      setOpen(false);
     setContext({})
    };
  return (
    <div>
        <ListItem button style={{height:'auto',width:"100%"}} key={index} onClick={()=>handleOpen(data[index])}>
        <Card style={{width:'100%'}}>
        <CardContent>
          <Typography variant="h5" component="p">
            {data[index]["title"]}
          </Typography>
          <Typography variant="h6" component="div">
          {
            JSON.parse(data[index]["tag"]).map((item:any)=>{
              return (<Chip size='small' label={item} key={item} style={{margin:'0 3px 0 0'}}/>)
            })
          }
          </Typography>
          
        </CardContent>
        <CardActions disableSpacing style={{color:"#909faf"}}>
        <DateRangeIcon /> {data[index]["cerate"]}  ◦  {data[index]["class"]}
        </CardActions>
        </Card>
      </ListItem> 

        <Dialog
       fullScreen
       // maxWidth="xl"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <Markdown context={context} handleClose={handleClose}/>
      </Dialog>
    </div>
  )
}
