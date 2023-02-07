import React, {useEffect, useRef } from 
'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';

var myChart: echarts.EChartsType
export default function CloudChart(props:any) {
    const {data} = props
    const cloud = useRef<any>(null)
  
    const getOption:any =()=>{
        return {
          series: [{
            type: 'wordCloud',
            sizeRange: [16, 80],
            rotationRange: [0, 90],
            rotationStep: 45,
            gridSize: 12,
            shape: "circle",
          
          keepAspect: false,
          maskImage: null,
            textStyle: {
              color: () => {
                let r = 100 + ~~(Math.random() * 100);
                let g = 135 + ~~(Math.random() * 100);
                let b = 100 + ~~(Math.random() * 100);
                return `rgb(${r}, ${g}, ${b})`
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: data
          }]
        };
  
      }
    
    useEffect(()=>{
      require("echarts-wordcloud")
      if (myChart != null && myChart != undefined){
        myChart.dispose();
    }

      myChart = echarts.init(cloud.current)
      myChart. setOption(getOption())
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



  return (
    <Zoom in timeout={500} style={{ transitionDelay: '800ms' }}>
    <Paper sx={{height:"400px",padding:"24px"}}>
        <Box sx={{height:"40px",fontWeight:"bold",fontSize:"1.4rem"}}>标签详情</Box>
        <Box sx={{height:"312px"}} ref={cloud}></Box>
    </Paper>
    </Zoom>
  )
}
