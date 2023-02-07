import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


import ReactMarkDown from "react-markdown"
import remarkGfm from 'remark-gfm'

//import "github-markdown-css"

import Context from "@/context/global"

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Markdown() {


    const {markdown,setMarkdown,code} = useContext(Context)

  
    const handleClose = () => {
        setMarkdown(false)
    };
  

  return (
    <div>
    <Dialog
      fullScreen
      open={markdown}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative',backgroundColor:"none" }}>
        <Toolbar>
        
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
            {code.title}
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
      <DialogContent>
      <Box sx={{width:"90%",margin:"0 auto"}}>
      <ReactMarkDown 
            // eslint-disable-next-line react/no-children-prop
            children={code.context}
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
      </Box>
      </DialogContent>
    </Dialog>
  </div>
  )
}
