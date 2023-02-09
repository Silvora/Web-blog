import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Context from "@/context/global"
import Layout from "@/layout/index"
import { useState,useEffect } from 'react'
import { getToken, setToken } from '@/utils/token'

export default function App({ Component, pageProps }: AppProps) {
  const [theme,setTheme] = useState(true);
  const [search,setSearch] = useState(false);
  const [markdown,setMarkdown] = useState(false);
  const [code,setCode] = useState({})
  const [classLen,setClassLen] = useState(0)
  const [contextLen,setContextLen] = useState(0)

  useEffect(()=>{
    const T = getToken("theme")

     if(T == undefined){
        setToken("theme",true)
      }
      if(T == "false"){
        setTheme(false)
      }
    
 
  }, [])
  return( 
    <Context.Provider value={{theme,setTheme,markdown,setMarkdown,code,setCode,search,setSearch,classLen,setClassLen,contextLen,setContextLen}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Context.Provider>
    )
}
