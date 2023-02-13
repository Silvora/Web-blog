import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';

import BarChart from '@/components/barChart';
import CloudChart from '@/components/cloudChart';
import LineChart from '@/components/lineChart';
import { GetTag } from '@/api/request';
export default function About() {

const [cloud,setCloud] = useState()

useEffect(()=>{
  // GetTag().then((result) => {

  //   result.data.forEach((item:any) => {
  //     item['value'] = item.id
  //     delete item['createTime']
  //   });
  //   setCloud(result.data)
  // }).catch((err) => {
  //   console.log(err)
  // });
},[])

  return (
    <Slide direction='up' in>
    <Box sx={{padding:"24px",height:"calc(100vh - 64px)"}}>
     <Grid container spacing={3}>
       
     <Grid item xs={12} md={8} >
         
         <BarChart/>

       </Grid>

       <Grid item xs={12}  md={4}>
        
      <CloudChart/>
       </Grid>

     </Grid>
     <Box sx={{marginTop:"24px"}}>
      <LineChart/>
     </Box>
   </Box>
   
   </Slide>
  )
}

// export async function getStaticProps() {
//   const url ='http://api.757909.top/blog'
//   const tagData = await fetch(url+'/tag')
// 	const _tag = await tagData.json()
  
//   // const classData = await fetch('http://127.0.0.1:7412/blog/class')
// 	// const _class = await classData.json()
//   // const listData = await fetch('http://127.0.0.1:7412/blog/markdown')
// 	// const _list = await listData.json()
// 	// 在构建时将接收到 `posts` 参数
// 	return {
// 	  props: {
// 		  _tag,
//       // _class,
//       // _list,
// 	  },
//   }
// }
