import React, {useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';

import Zoom from '@mui/material/Zoom';
import { GetTotal } from '@/api/request';

var myChart: echarts.EChartsType
export default function BarChart() {


    const bar = useRef<any>(null)

    const [x,setX] = useState<any>([])
    const [xData,setXData] = useState<any>([])

const getOption:any = ()=>{
  return {
  
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data:x,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Direct',
        barWidth: '60%',
        // data: [120, 200, 150, 80, 70, 110, 130],
        data:xData,
        type: 'bar'
      }
    ]
  };
}


const SetCharts = ()=>{
  if (myChart != null && myChart != undefined){
    myChart.dispose();
}
  myChart = echarts.init(bar.current);
  myChart.setOption(getOption());
  window.addEventListener('resize', function() {
    myChart.resize();
  });
}

const GetData = ()=>{
  GetTotal().then((result) => {
    result.data.forEach((item:any) => {
      x.push(item.class)
      xData.push(item.total)
    });
   SetCharts()
  }).catch((err) => {
    console.log(err)
  });
}


useEffect(()=>{

  console.log("first")
  if(myChart){
    GetData()
  }
 
  SetCharts()
 
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



  return (
    <Zoom in timeout={500} style={{ transitionDelay: '600ms' }}>
    <Paper sx={{height:"400px",padding:"24px"}} >
      <Box sx={{height:"40px",fontWeight:"bold",fontSize:"1.4rem"}}>分类情况</Box>
        <Box sx={{height:"312px"}} ref={bar}></Box>
    </Paper>
    </Zoom>
  )
}
