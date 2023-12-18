'use client'

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page  =() => {
const [data,setdata]=useState();
const ap= async()=>{

    setTimeout(async () => {
        let data = await axios.get('http://localhost:5050/ ')
        console.log(data.data)
    }, 3000);
  
}
    



    console.log('hello')
    return (

        <>
    

        <div className=' flex align-bottom space-x-[323px] bg-purple-500 m-2 rounded-md border-spacing-3 shadow-black  border-opacity-40 border-fuchsia-600'>
        <div className=  ' mx-4 text-white justify-center '><h2>hello</h2></div>
          <ul className='flex'>
          <li className='mx-8 text-white my-1  hover:bg-slate-300  hover:cursor-pointer'>home</li>
          <li className='mx-8 text-white my-1  hover:bg-slate-300  hover:cursor-pointer'>home</li>
          <li className='mx-8 text-white my-1  hover:bg-slate-300  hover:cursor-pointer'>home</li>
          <li className='mx-8 text-white my-1  hover:bg-slate-300  hover:cursor-pointer'>home</li>
         
          </ul>
            
        </div>

          <div className=' grid md:grid-cols-4 bg-slate-400 m-5 '>

             <div className='bg-red-400 m-2'>hii</div>
             
             <div className='bg-red-400 m-2'>hii</div>
             
             <div className='bg-red-400 m-2'>hii</div>
             
             <div className='bg-red-400 m-2 rounded-full animate-bounce ' >hii</div>
             </div>





             
        </>
    );
}

export default Page;
