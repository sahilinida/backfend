'use client'

import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { inc } from '../rtk/slice';
import { data } from 'autoprefixer';
import { useQuery } from 'react-query';
import { useGetapiQuery } from '../rtk/query';


const Page = () => {
   let {isError,isLoading,data:qdata}=useGetapiQuery()
    let [data,setdata]=useState()
    let dat=useSelector((data)=>data) 
    console.log(dat)
console.log(qdata)

    const disptch=useDispatch()

    let back={name:'backdata'}


   let api= async()=>{
    let data=  await axios.post('http://localhost:5050/',back)
    console.log(data.data)
    console.log('runapi')
    toast.success('call api')
    
   }
  let na='payload'
console.log('whiut api')

// const  init={
//     name:'',
//     sir:'',
//     age:'',
  
//     num:''
// }
//     const {handleBlur,handleChange,values,initialValues,handleSubmit}=useFormik(
//         initialValues=init,
//         onsubmit((values)=>{
//             console.log(values)
//         })

        
//     )
    return (
        <>

        <div className=' bg-amber-300 flex justify-center m-2'>
            <h1 className=' text-white'>useFormik for form </h1>




          
        </div>
        <form className=' bg-yellow-700 p-2 '> 

<input className=' mx-[333px] my-[5px]' type='text' placeholder='name' />   <br/>
<input className=' mx-[333px] my-[5px]' type='text' placeholder='name' onChange={''} name=''/>  <br/>
<input className=' mx-[333px] my-[5px]' type='text' placeholder='name' onChange={''} name=''/>  <br/>
<input className=' mx-[333px] my-[5px]' type='text' placeholder='name' onChange={''} name=''/>  <br/>
             {/* <button type='submit' onClick={()=> api()}> submit</button> <br/> */}

         
</form>
<button onClick={ ()=>api()}> call</button>

<button onClick={ ()=> disptch(inc(na))}> disptch</button> 



   <h1 className='md:bg-red-500 tb:bg-blue-700 sm:bg-green-400'>text resposive</h1>
        </>
    );
}

export default Page;
