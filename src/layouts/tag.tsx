/** @format */

import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Chip from "@material-ui/core/Chip";
import {tagColor} from "./color"
export default function Tag(props:any) {
	const data = props.data.data;

	
 return(
		<Card style={{padding:'0 0 15px 0'}}>
			<CardHeader
				avatar={<LocalOfferIcon></LocalOfferIcon>}
				//action={}
				//title="分类"
				subheader='标签'
			/>
			{/* <Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' />
			<Chip label='Basic' size='small' color='primary' /> */}
			{
				data.map((item:any)=>{
					return(<Chip key={item.id} label={item.name} size='small'  style={{margin:'2px 5px',backgroundColor:tagColor[item.id]}}/> )
				})
			}
		</Card>
	);
}
