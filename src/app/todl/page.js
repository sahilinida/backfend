'use client'
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { inc } from '../rtk/slice';

const Page = () => {

    let [show,setshow]=useState(false)

    let btn=(d)=>{
        setshow(!show)
   
          toast.success(d)
          console.log('called')
    }

   let tim=()=>{
   setTimeout(() => {
    console.log('sorry for dealy')
   }, 2000);
   }
      
let disptch=useDispatch()
let dataa=useSelector((data)=>data)
console.log(dataa)

    let data='called'
    return (
        <div>
            <button className='bg-red-400 m-4 rounded-lg' onDoubleClick={()=>toast.warning('dubble cliek now')} onClick={()=>btn(data)}> show hide butt</button>
        {
      show?<div className='bg-purple-400 text-center text-white'>hello</div>:null
         }


         <button onClick={()=>tim()}> loading</button>

         <button onClick={()=>disptch(inc())}> rtk</button>
        </div>
    );
}

export default Page;
