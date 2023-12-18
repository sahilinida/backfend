
'use client'
import { Cookie } from 'next/font/google';
import React, { useState } from 'react';

import stl from './page.module.css'
import { toast } from 'react-toastify';
const Page = () => {

    const [data,setdata]=useState();


    let  setloc=()=>{
        let lo= localStorage.setItem('local',data)
        toast.success('set local data')
console.log('fun call')

       
    }

 
    return (
        <div>
            <input type="text" onChange={(e)=>setdata(e.target.value)} placeholder='inte value'  className= 'bg-green-400 m-4'/>
    
                 <button onClick={()=>setloc()}>setlocal</button>

              <h1 style={{color:stl.hh}} className='hh'>hello scss</h1>
            </div>
    );
}

export default Page;
