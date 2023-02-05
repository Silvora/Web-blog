import React, { use, useEffect, useLayoutEffect, useState } from 'react'
import Router from 'next/router';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip,{ TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import AlarmIcon from '@mui/icons-material/Alarm';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import { getToken, setToken } from '@/utils/token';
import Link from 'next/link';


const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));



export default function Header(props:any) {



    const {handleSearch,handleTheme} = props
    const [theme,setTheme] = useState(true)


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
      React.useState<null | HTMLElement>(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
  
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };


    const handleDialogModel = ()=>{
        handleSearch(true)
    }

    // const handleRouteItem = ()=>{
    //    // console.log("object",route);
    //     //Router.push(route)
    //     handleMobileMenuClose()
    // }
  
    const handleIsThemes=()=>{
        let t = !theme
        setTheme(t)
       setToken("theme",t)
       handleTheme(t)
    }

    useEffect(()=>{
      let val = getToken("theme")

      console.log(val)
      if(val == undefined){
        setToken("theme",true)
        val = true
      }

      if(val == "false"){
        handleIsThemes()
      }

    },[])


    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id='primary-search-account-menu-mobile'
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
            <Link href="/">

            <MenuItem sx={{width:900}} onClick={handleMobileMenuClose}>
            <IconButton size="large" aria-label="show 4 new home" color="inherit">
                <HomeIcon />
            </IconButton>
            <p>首页</p>
           
          </MenuItem>
          </Link>

          <Link href="/about">
          <MenuItem onClick={handleMobileMenuClose}>
         
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <AppsIcon />
            </IconButton>
            <p>类别</p>
           
          </MenuItem>
          </Link>


          <Link href="/time">

          <MenuItem onClick={handleMobileMenuClose}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <AlarmIcon />
            </IconButton>
            <p>日志</p>
          
          </MenuItem>
          </Link>

          <Link href="/search">
          <MenuItem onClick={handleMobileMenuClose}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <p>搜素</p>
          
          </MenuItem>
          </Link>
        </Menu>
      );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"transparent",color:"#000"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontWeight:"bold"}}
          >
            Zjs-7579
          </Typography>

         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


          <LightTooltip title="首页" enterDelay={500} leaveDelay={200}>
            <Link href="/">
          <IconButton size="large" aria-label="show 4 new home" color="inherit" >
                <HomeIcon />
            </IconButton>
            </Link>
            </LightTooltip>
          
            <LightTooltip title="类别" enterDelay={500} leaveDelay={200}>
            <Link href="/about">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <AppsIcon />
            </IconButton>
            </Link>
            </LightTooltip>

            <LightTooltip title="日志" enterDelay={500} leaveDelay={200}>
            <Link href="/time">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <AlarmIcon />
            </IconButton>
            </Link>
            </LightTooltip>

            <LightTooltip title="搜索" enterDelay={500} leaveDelay={200} onClick={handleDialogModel}>
            <IconButton size="large" aria-label="show 4 new search" color="inherit">
                <SearchIcon />
            </IconButton>
            </LightTooltip>

            <LightTooltip title="换肤" enterDelay={500} leaveDelay={200}>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              onClick={handleIsThemes}
            >
              {
                theme?<LightModeIcon />:
                <DarkModeIcon/>
              }
            </IconButton>
            </LightTooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
    </>
  )
}
