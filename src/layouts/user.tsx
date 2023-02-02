import React from 'react'
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
export default function User(props:any) {
  const {tag,class_}= props.data
  return (
    <Card >
    <div style={{padding:"25px 0"}}>
    <Avatar style={{width:'65px',height:'65px',margin:"0 auto"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
    </div>
    <div className='statice'>
      <div>
        <p>12</p>
        <p className='title'>文章</p>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>
        <p>{class_}</p>
        <p className='title'>分类</p>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>
        <p>{tag}</p>
        <p className='title'>标签</p>
      </div>
    </div>
      {/* <CardHeader
        //avatar={}
        //action={}
        //title="分类"
        subheader="分类"
      /> */}
    </Card>
  )
}
