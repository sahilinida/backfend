'use client'

import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    

let arry=[1,33,43,5,67,87,9,]
arry.forEach((val)=>{
    console.log(val)
})
let dy=323;
const [int,setint]=useState()
    let newarr =arry.filter((val)=>val!==int)




    return (
        <div>
            <h1>this is dwonlod in imege here click and dwonlod now 😃</h1>
          {/* <div className='bg-gray-200  p-4 w-[233px] mx-12'>

          <img src='j.PNG' alt=''    className='w-[232px]  hover:w-[222px] '/>
          <button  onClick={()=>toast.success('dwonlod started') } className='bg-green-300 mx-12 mt-4 p-[11px] rounded-md hover:w-[555px] hover:h-[71px]'> dwonlod now</button>
          </div> */}
             {/* <h1>{`year ${year} month ${mont} dat ${dya} hour ${hour} min ${min} sec ${dec}`}</h1> */}
          <Link href={'j.PNG'} download={'j.PNG'}>dwonlod</Link>

<input type='number'  onChange={(e)=>setint(e.target.value)}/> 
          {
            newarr.map((it)=>{
                return(<>
                <h1 className='bg-red-300 m-2 text-center'>{it}</h1>
                </>)
            })
          }
        </div>
    );
}

export default Page;
