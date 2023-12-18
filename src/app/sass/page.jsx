'use client'
import React, { useEffect } from 'react';
import style from './scss.moduel.css'
import { useDispatch, useSelector } from 'react-redux';
import { inc } from '../rtk/slice';
import { useState } from 'react';

import axios from 'axios';
import { useGetapiQuery, usePostapiMutation,  } from '../rtk/query';
import { toast } from 'react-toastify';


let dat=[{name:'senddata axios'}]

const Page =   () => {


    useEffect(()=>{
        console.log('hello')
    },[]);

const [deata,setdata]=useState();
    const [int,setint]=useState();
        const app= async()=>{

        
        const api= await axios.post('http://localhost:5050/')
        setdata(api.data);
     
        }
   


    
      
  const oo={name:'send from forntend'}

// const {data:api,isError,isLoading,refetch}=useGetapiQuery()

const [postapi,{isError,isLoading,}]=usePostapiMutation()

const maut=async()=>{
   let data= await postapi(oo)
   console.log(data)
}
console.log(isError)
console.log(isLoading)


// console.log(post)

// useEffect(async()=>{
//     let apidata = await   postapi()
//     console.log(apidata)
// },[])
 
    const data=useSelector((data)=>data)

    console.log(data)
const disptch=useDispatch();


console.log(int)
console.log(deata)

useEffect(()=>{
    console.log('hello moto')
},[])

    return (
        <div>

            <input type="text" placeholder='inter name' onChange={(e)=>setint(e.target.value)}  />
      <button onClick={()=>disptch(inc(int))}> click now</button>
            <h1  style={style.h}>this is sass pgae now</h1>

            <button onClick={()=>app()} >refetch rtk</button>
     
     <button onClick={()=>maut()}> matu</button>
        </div>
    );
}

export default Page;
