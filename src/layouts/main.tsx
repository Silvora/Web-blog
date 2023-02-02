import React, { useLayoutEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import { FixedSizeList } from 'react-window';

import Item from './item';

export default function Main(props:any) {

 const data = props.data.data

  const ListDom = useRef<any>()
  const [h,SetH ]= useState(100)
  const [w,SetW] = useState(100)

  useLayoutEffect(()=>{
    
    SetH(ListDom.current.offsetHeight)
    SetW(ListDom.current.offsetWidth)

  },[])


  function renderRow(props:any) {

    return <Item data={props}/>
  }

  return (
    <Card style={{height:"calc(100vh - 100px)",border:"none",boxShadow:"none"}} ref={ListDom}>

      <FixedSizeList 
      height={h} 
      width={w} 
      itemSize={152}
      itemCount={data.length}
      itemData={data}
      className="listDemo"
      style={{width:"100%",height:"100%"}}
      >
      {renderRow}
      </FixedSizeList>
    </Card>
  )
}
