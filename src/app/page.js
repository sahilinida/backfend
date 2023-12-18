
'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'


export default function Home() {

 useEffect(()=>{
   require==(' bootstrap/dist/js/bootstrap.bundle.min.js')
 },[])


  return (

  
    <>

<div className='grid md:grid-cols-3 m-4 p-3 sm:grid-1 sm:p-4'>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4  '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>



   </div>

   
   <div className='grid md:grid-cols-3 m-4 p-3 sm:grid-1 sm:p-4'>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4  '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>



   </div>
{/* first ks  */}
   <div className='grid md:grid-cols-3 m-4 p-3 sm:grid-1 sm:p-4'>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4  '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>

<div className='w-[315px] h-[136px] bg-gray-100 rounded-md shadow-xl m-4 '>
<h1 className='m-2 text-red-500'>what is react js how to use react js </h1>
<div className='flex space-x-5 ml-12'>
<img src='./img/py.png' className='w-[122px] h-[92px] '></img>
<button className='bg-green-400 h-12 p-2 rounded-md mt-4 hover:animate-pulse'>click now </button>
</div>
</div>



   </div>


<Link href={'./opps'} className='text-red-500'>go nv</Link>


    </>

  )
}

export const head = {

   
}
