/** @format */

import React from "react";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import TonalityIcon from "@material-ui/icons/Tonality";
import GitHubIcon from "@material-ui/icons/GitHub";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
export default function NavBar() {
	const [alignment, setAlignment] = React.useState("");

	const handleAlignment = (event: any, newAlignment: any) => {
		console.log(newAlignment)
		if(newAlignment == "search"){
			handleClickOpen()
		}

		setAlignment(newAlignment);
	};

	const [open, setOpen] = React.useState(false);
	//const theme = useTheme();
	//const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};

	return (
		<>
		<div className='nav'>
			<div className='bar'>
				<div className='logo'>
					<span>Zjs-7579</span>
				</div>
				<ToggleButtonGroup
					exclusive
					onChange={handleAlignment}
					aria-label='text alignment'
					// style={{border:"none"}}
				>
					<ToggleButton value='home' aria-label='home'>
						<Link href='/'>
							<span>首页</span>
						</Link>
					</ToggleButton>

					{/* <ToggleButton value='home' aria-label='home'>
						<Link href='/'>
							<span>分类</span>
						</Link>
					</ToggleButton>

					<ToggleButton value='home' aria-label='home'>
						<Link href='/'>
							<span>标签</span>
						</Link>
					</ToggleButton> */}
					<ToggleButton value='log' aria-label='log'>
						<Link href='/log'>
							<span>日志</span>
						</Link>
					</ToggleButton>

					<ToggleButton value='search' aria-label='left aligned'>
						<SearchIcon style={{ fontSize: "20px" }} />
					</ToggleButton>
					<ToggleButton value='center' aria-label='centered'>
						<TonalityIcon style={{ fontSize: "20px" }} />
					</ToggleButton>
					<ToggleButton value='right' aria-label='right aligned'>
						<GitHubIcon style={{ fontSize: "20px" }} />
					</ToggleButton>
				</ToggleButtonGroup>
			</div>


			
		</div>
		<Dialog
        //fullScreen={fullScreen}
		fullWidth
		maxWidth="sm"
        open={open}
        onClose={handleClose}
       aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title">sdsad</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <TextField id="outlined-basic" label="搜索" variant="outlined" style={{width:"100%"}}/>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          dddddd
        </DialogActions> */}
      </Dialog>
		</>


		
	);
}
