/** @format */

import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BallotIcon from "@material-ui/icons/Ballot";
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from "@material-ui/icons/Apps";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
export default function Class(props:any) {

	const data= props.data.data

	return (
		<Card style={{ margin: "25px 0"}}>
			<CardHeader
				avatar={<BallotIcon style={{ fontSize: "24px" }} />}
				//action={}
				//title="分类"
				subheader='分类'
			/>
			<List component='nav' aria-label='secondary mailbox folders' style={{maxHeight:"140px",overflow:"auto"}}>
				{
					data.map((item:any)=>{
							return(<ListItem button key={item.id}>
								<ListItemText style={{color:"#708090"}} primary={item.name} />
								
								<ListItemSecondaryAction>
									<ArrowForwardIcon style={{color:"#708090"}}/>
								{/* <Avatar style={{width:"24px",height:"24px",fontSize:"14px"}}>{item.total}</Avatar> */}
								</ListItemSecondaryAction>
							</ListItem>)
					})
				}
               

				{/* <ListItemLink href="#simple-list">
<ListItemText primary="Spam" />
</ListItemLink> */}
			</List>
		</Card>
	);
}


