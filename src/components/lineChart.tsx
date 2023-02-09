import React, {useEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';

var myChart: echarts.EChartsType
export default function LineChart() {

    const line = useRef<any>(null)


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
      data: [1, 2, 1, 3, 0, 1, 2],
      type: 'line',
      smooth: true
    }
  ]
};


useEffect(()=>{
  if (myChart != null && myChart != undefined){
    myChart.dispose();
}

   myChart = echarts.init(line.current);
  myChart.setOption(option);
    
    window.addEventListener('resize', function() {
        myChart.resize();
      });
    })


  return (
    <Zoom in timeout={500} style={{ transitionDelay: '1000ms' }}>
    <Paper sx={{height:"calc(100vh - 536px)",padding:"24px"}}>
        <Box sx={{height:"40px",fontWeight:"bold",fontSize:"1.4rem"}}>日志记录
       </Box>
        <Box sx={{height:"calc(100% - 40px)"}} ref={line}></Box>
    </Paper>
    </Zoom>
  )
}
