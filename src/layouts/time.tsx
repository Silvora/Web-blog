/** @format */

import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import AlarmIcon from "@material-ui/icons/Alarm";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
export default function Time() {

	const data = [
		{
			id:1,
			name:"你好的...",
			decs:"",
			time:"2023-01-12 12:12:12",
		},
		{
			id:2,
			name:"你好的...",
			decs:"",
			time:"2021-7-3 02:52:12",
		},
		{
			id:3,
			name:"你好的...",
			decs:"",
			time:"2022-11-23 18:42:42",
		}
	]
	const color = ["primary","secondary","grey"]

	return (
		<Card style={{ marginTop: "25px" }}>
			<CardHeader
				avatar={<AlarmIcon></AlarmIcon>}
				//action={}
				//title="分类"
				subheader='最近文章'
			/>
			<Timeline align='alternate'>

				{
					data.map((item,idx)=>{
						return(<TimelineItem key={item.id}>
							<TimelineOppositeContent>
						<Typography color="textSecondary" style={{fontSize:"12px"}}>{item.time}</Typography>
					  </TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot color={color[idx]} />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>{item.name}</TimelineContent>
							</TimelineItem>)
					})
				}
				<TimelineItem>
					<TimelineSeparator>
						<MoreHorizIcon />
					</TimelineSeparator>
					<TimelineContent></TimelineContent>
				</TimelineItem> 
			</Timeline>
		</Card>
	);
}
