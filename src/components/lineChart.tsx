import React, { useLayoutEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
export default function LineChart() {

    const line = useRef<any>()


const option:any= {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
  xAxis: {
    type: 'category',
    data: ['2023-12-12', '2023-12-12', '2023-12-12', '2023-12-12', '2023-12-12', '2023-12-12', '2023-12-12']
  },
  yAxis: {
    type: 'value',
    splitLine: {
        show: false
      }
  },
  series: [
    {
      data: [10, 40, 60, 80, 100, 200, 300],
      type: 'line',
      smooth: true
    }
  ]
};



    useLayoutEffect(()=>{
    const myChart = echarts.init(line.current);
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
      });
    })


  return (
    <Paper sx={{height:"calc(100vh - 536px)",padding:"24px"}}>
        <Box sx={{height:"40px"}}><span style={{fontWeight:"bold",fontSize:"1.4rem"}}>访问量</span>
        <span style={{float:"right",color:"#ccc"}}>总访问量：1111</span></Box>
        <Box sx={{height:"calc(100% - 40px)"}} ref={line}></Box>
    </Paper>
  )
}
