"use client"

import { createContext, useState } from "react"

 
export const ThemeContext= createContext();
export const ThemeProvider = ({children}) =>{
    console.log("clicked");
 const [mode,setMode]= useState("dark");
 const toggle=() =>{
     if(mode==="dark")
     {
        setMode("light");
     }

     else setMode("dark");
 }

 return (
 <ThemeContext.Provider value={{toggle,mode}}>
   <div className={`theme ${mode}`}>{children}</div> 
 </ThemeContext.Provider>
 )
}