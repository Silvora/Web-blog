/** @format */

import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

//import MuiAlert from "@material-ui/lab/Alert";
import Alert from '@material-ui/lab/Alert';
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function Info() {
	return (
		<Card>
			<CardHeader
				avatar={<AssignmentIcon></AssignmentIcon>}
				//action={}
				//title="分类"
				subheader='公告栏'
			/>
			<Alert severity='error'>
            你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少你是多少，
            你是多少.
			</Alert>
			{/* <MuiAlert severity="warning">This is an error message!This is an error message!This is a warning message!</MuiAlert>
      <MuiAlert severity="info">This is an error message!This is an error message!This is an information message!</MuiAlert>
      <MuiAlert severity="success">This is an error message!This is an error message!This is a success message!</MuiAlert> */}
		</Card>
	);
}
