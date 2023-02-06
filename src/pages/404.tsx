import React from 'react'
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import Box from '@mui/material/Box';
export default function Error() {
  return (
    <Slide direction='up' in>
     <Box>
     <Image src="/404.svg"  alt="404"
      width={500}
      height={500} style={{display:"block",margin:"0 auto"}}></Image>
     </Box>
    </Slide>
   
  )
}
