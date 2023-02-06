import React, { useLayoutEffect, useRef } from 
'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
export default function CloudChart() {

    const cloud = useRef<any>(null)
    const data= [{ name: "Java", value: 16884 }, { name: "C", value: 16180 }, { name: "Python", value: 9089 }, { name: "C++", value: 6229 }, { name: "C#", value: 3860 }, { name: "VB.NET", value: 3745 }, { name: "Ruby", value: 1318 }, { name: "Assembly", value: 1307 }, { name: "R", value: 1261 }, { name: "Delphi", value: 1046 }, { name: "VB", value: 1234 }, { name: "Go", value: 1100 }, { name: "Delphi", value: 1046 }, { name: "SAS", value: 915 }, { name: "Perl", value: 1023 }, { name: "Matlab", value: 924 }, { name: "PL/SQL", value: 822 }, { name: "D", value: 814 }, { name: "Scheme", value: 193 }, { name: "COBEL", value: 447 }, { name: "Scratch", value: 524 }, { name: "Dart", value: 448 }, { name: "ABAP", value: 447 }, { name: "Scala", value: 442 }]



     const data_= [{ name: "Java", value: 16884 }, ]
     // 随机颜色
  const randcolor = () => {
    let r = 100 + ~~(Math.random() * 100);
    let g = 135 + ~~(Math.random() * 100);
    let b = 100 + ~~(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`
  }

    const option:any = {
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
              return randcolor()
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: data
        }]
      }
    
    useLayoutEffect(()=>{
      require("echarts-wordcloud")
      
      const myChart = echarts.init(cloud.current)
      myChart. setOption(option)

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
