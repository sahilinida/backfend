'use client'
import React, { useState } from 'react';
import style from './nav.module.css'
import Link from 'next/link';

const Page = () => {
       const [isclick,setclick]=useState(false);

    const togalbar=()=>{
             setclick(!isclick)
    }
    return (
         <div>

  <nav className='bg-gray-400'>

    <div className=' max-w-7xl mx-auto sm:p-6 '>

        <div className=' flex items-center justify-between h-16'>
             <div className=' flex items-center '>

         <div className=' flex shrink-0'>
                 <a href=''>home</a>
         </div>
             </div>
                    <div className='  sm:block'>
                        <div className=' ml-7 flex items-center space-x-4'>

                            <a href='' className=' text-white hover:bg-white hover:text-black rounded-lg'>home</a>
                            <a href='' className=' text-white hover:bg-white hover:text-black rounded-lg'>home</a>
                            <a href='' className=' text-white hover:bg-white hover:text-black rounded-lg'>home</a>
                            <a href='' className=' text-white hover:bg-white hover:text-black rounded-lg'>home</a>
                        </div>

                    </div>
                    <div className=' md:hidden flex items-center'>
                        <button className=' inline-flex  items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus: ring-inset  focus:ring-white ' onClick={togalbar}>
                            {
                                isclick?<div>😁</div>:null
                            }
                             </button>
                    </div>
        </div>
    </div>
  </nav>

         </div>
    );
}

export default Page;
