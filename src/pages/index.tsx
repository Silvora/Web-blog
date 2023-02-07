import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import User from '@/components/user';
import Notice from '@/components/notice';
import Tag from '@/components/tag';
import List from '@/components/list';
import Slide from '@mui/material/Slide';

import Markdown from '@/components/markdown';

export default function Home(props:any) {
  const {_class,_list} = props
  const total={
    classLen:_class.data.length,
    contextLen:_list.data.length
  }
  return (
    <>
    <Markdown/>
    <Slide direction='up' in>
     <Box sx={{padding:"24px",height:"calc(100vh - 64px)"}}>
      <Grid container spacing={3}>
        
        <Grid item xs={12}  md={4} lg={3}>
         
         <User data={total}></User>
         <Notice></Notice>
          <Tag data={_class.data}></Tag>
          
        </Grid>
        <Grid item xs={12} md={8} lg={9} >
          
          <List data={_list.data}></List>
        </Grid>
      </Grid>
    </Box>
    </Slide>
    </>
  )
}

export async function getStaticProps() {
  const url ='http://api.757909.top/blog'
  const classData = await fetch(url+'/class')
	const _class = await classData.json()
  const listData = await fetch(url+'/markdown')
	const _list = await listData.json()
	// 在构建时将接收到 `posts` 参数
	return {
	  props: {
      _class,
      _list,
	  },
  }
}