"use client"
import useSWR from 'swr'
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import React, { useEffect, useState } from 'react'


const  fetcher = (...args) => fetch(...args).then((res) =>  res.json())
 const dashBoard = () => {
  // useEffect(() =>{
  //   async function getData(){
  //     const res= await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
  //      if(!res.ok)
  //      {
  //           return PageNotFoundError;
  //      }
    
  //     const data= await res.json();
  //     setData(data);
  //     setIsLoading(false);
  
  //   } ;
  //    getData();
  // },[])
  const {data,error} = useSWR('https://jsonplaceholder.typicode.com/posts',fetcher)
  console.log(data);
  return (
  
    <div>Dashboard</div>
  )
}


export  default dashBoard;