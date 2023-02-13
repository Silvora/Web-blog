import React,{useContext, useState} from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';

import SearchList from './searchList';


import Context from '@/context/global';
import { GetMarkdown, GetSearchList } from '@/api/request';

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
    const [searchValue,setSearchValue] = useState<any>('')
    const [list,setList] = useState<any>([])
    const handleClose = () => {
      setSearch(false)
     // setSearchValue('')
    };
    const handleSearchValue = (e:any)=>{
      setSearchValue(e.target.value)
    }
    const GetData=()=>{
      let obj={
        's':searchValue
      }
      let classTag:any[] = []
      let data: any[] = []

      GetSearchList(obj).then((result) => {
        //console.log(result)
        result.data.forEach((item:any) => {
          //true
         if( classTag.includes(item.class)){
          let idx = classTag.indexOf(item.class)
          data[idx].children.push(item)
         }else{
            classTag.push(item.class)
            data.push({
              id:item.class,
              title:item.class,
              children:[{...item}]
            })
         }
        });
        setList(data)
      }).catch((err) => {
        
      });
    }
    const handleEnter = (e:any)=>{     
      if(e.keyCode == '13'){
        GetData()
      }
    }

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
        <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" value={searchValue} onChange={handleSearchValue} onKeyUp={handleEnter}/>
        </DialogTitle>
        <DialogContent>
          <SearchList data={list}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}
