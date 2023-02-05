import React, { useLayoutEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
export default function BarChart() {


    const bar = useRef<any>()

  //const myChart = echarts.init(chartDom);
const option:any = {
  
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

useLayoutEffect(()=>{
  const myChart = echarts.init(bar.current);
  myChart.setOption(option);

  window.addEventListener('resize', function() {
    myChart.resize();
  });
},[])



  return (
    <Paper sx={{height:"400px",padding:"24px"}} >
      <Box sx={{height:"40px",fontWeight:"bold",fontSize:"1.4rem"}}>分类情况</Box>
        <Box sx={{height:"312px"}} ref={bar}></Box>
    </Paper>
  )
}
