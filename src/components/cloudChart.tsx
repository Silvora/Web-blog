import React, {useEffect, useRef, useState } from 
'react'
import Box from '@mui/material/Box';
import * as echarts from "echarts"
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';


var myChart: echarts.EChartsType
export default function CloudChart(props:any) {
    const {tag} = props
    const cloud = useRef<any>(null)

    //const [edges,setEdges] = useState<any>([])

    //const [data,setData] = useState<any>([])
  

      // eslint-disable-next-line react-hooks/exhaustive-deps
      let option:any =  {
        // tooltip: {
        //   trigger: 'item'
        // },
        legend: {
          top: '0%',
          left: 'center'
        },
        series: [
          {
            name: 'tag',
            type: 'pie',
            radius: ['35%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 4
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: tag
          }
        ]
      };


    
    useEffect(()=>{
      

      if (myChart != null && myChart != undefined){
        myChart.dispose();
      }
      myChart = echarts.init(cloud.current);
      myChart.setOption(option);
     
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    },[tag])



  return (
    <Zoom in timeout={500} style={{ transitionDelay: '800ms' }}>
    <Paper sx={{height:"400px",padding:"24px"}}>
        <Box sx={{height:"40px",fontWeight:"bold",fontSize:"1.4rem"}}>标签详情</Box>
        <Box sx={{height:"312px"}} ref={cloud}></Box>
        {/* <ReactWordcloud words={data} /> */}
    </Paper>
    </Zoom>
  )
}
