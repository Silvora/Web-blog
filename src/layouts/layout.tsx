/** @format */

import React from "react";
import NavBar from "./navbar";

import User from "./user";
import Class from "./class";
import Tag from "./tag";

import Info from "./info";
import Time from "./time";

import Main from "./main";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Layout({ children }: any) {
	return (
		<div className='blog'>
			<CssBaseline/>
			<NavBar></NavBar>
			<div style={{height:"85px"}}></div>
			{children}
			{/* <Context>{children}</Context> */}
			{/* <Container>
				<Grid container spacing={3}>
					<Grid item xs>
						<User></User>
						<Class></Class>
						<Tag></Tag>
					</Grid>
					<Grid item xs={6}>
						<Main>{children}</Main>
					</Grid>
					<Grid item xs>
						<Info></Info>
						<Time></Time>
					</Grid>
				</Grid>
			</Container> */}
		</div>
	);
}
