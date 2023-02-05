/** @format */

import React from "react";

import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { height } from "@mui/system";

export default function Time() {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<Timeline
			position='alternate'
			sx={{
				height: "calc(100vh - 64px)",
				overflow: "hidden",
				overflowY: "auto",
				padding: "48px 180px",
				"&::-webkit-scrollbar": {
					display: "none",
				},
			}}
		>
			{data.map((item, idx) => {
				return (
					<TimelineItem key={item} sx={{ minHeight: "200px" }}>
						{/* <TimelineOppositeContent color="text.secondary" style={{fontSize:"1rem"}}>
					2023-12-05 15:45:45
					  </TimelineOppositeContent> */}
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Paper>
								<Box sx={{ padding: "6px 12px", color: "#CCC" }}>
									2023-4-12-12 14:15:45
								</Box>
								<Box
									sx={{
										fontWeight: "bold",
										padding: "6px 12px",
										overflow: "hidden",
										textOverflow: "ellipsis ",
									}}
								>
									<Chip
										label='primary'
										color='primary'
										variant='outlined'
										sx={{ margin: "0 3px" }}
									/>
									{item} 在你的项目中创建一个pages 目录在你的项目中创建一个
									pages 目录在你的项目中个 pages 目录在你的项目中创建一个 pages
									目录
								</Box>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				);
			})}

			<TimelineItem>
				<TimelineSeparator>
					<MoreHorizIcon />
				</TimelineSeparator>
				<TimelineContent></TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
