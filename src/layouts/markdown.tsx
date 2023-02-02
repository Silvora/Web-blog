import React from 'react'
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import ReactMarkDown from "react-markdown"
import remarkGfm from 'remark-gfm'

//import "github-markdown-css"



import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'



export default function Markdown(props:any) {
    console.log(props);
    const {context,handleClose}=props
  return (
    <div>
        <AppBar sx={{ display: 'flex'  }} component="nav">
          <Toolbar>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {context.title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
           
          </Toolbar>
        </AppBar>

       
        <DialogContent sx={{ my: 8  }}>
          
            <ReactMarkDown 
            // eslint-disable-next-line react/no-children-prop
            children={context.text}
            remarkPlugins={[remarkGfm]}
            components={{ code({node, inline, className, children, ...props}:any) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <pre>
                <SyntaxHighlighter

                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                    style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
                </pre>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }}}

                  ></ReactMarkDown>
        </DialogContent>
    </div>
  )
}
