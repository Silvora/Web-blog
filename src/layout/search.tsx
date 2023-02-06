import React,{useContext} from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';

import SearchList from './searchList';


import Context from '@/context/global';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Search() {

    const {search,setSearch} = useContext(Context)
    const handleClose = () => {
      setSearch(false)
    };
  

  return (
    <div>
      <Dialog
        open={search}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"

        fullWidth
        maxWidth="md"
        
      >
        <DialogTitle>
        <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
        </DialogTitle>
        <DialogContent>
          <SearchList/>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
