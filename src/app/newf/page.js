'use client'

import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import Formscima from '../form/Formscima';
import axios from 'axios';
import { useState } from 'react';

const Page = () => {



    const inital={
        fname:'',
        last:'',
        age:'',
        phone:'',
        email:''
    }

    const {handleBlur,handleChange,handleSubmit, values,errors}=useFormik({
        
       initialValues:inital,
    //    validationSchema:Formscima,
      onSubmit:(values)=>{
                console.log(values)
      }

    
         



    })

    
 
       const fun= async()=>{
        let res= await axios.post('http://localhost:5050/',values)

        console.log(res.data)
       }
     
   
    



    return (
        <div>
            <h1>THIS IS formik page starated</h1>
           <form onSubmit={handleSubmit} className='bg-red-400 m-8'>
           <input placeholder='name' onChange={handleChange} className='m-2' name='fname' value={values.fname} type='text'/> <br/>
           <input placeholder='lastname' onChange={handleChange} className='m-2' name='last' value={values.last} type='text'/>  <br/>
           <input placeholder='email' onChange={handleChange} className='m-2' name='email' value={values.email} type='text'/> <br/>
           <input placeholder='phone' onChange={handleChange} className='m-2' name='phone' value={values.phone} type='number'/> <br/>
           <input placeholder='age' onChange={handleChange} className='m-2' name='age' value={values.age} type='number'/> <br/>
     
               <button type='submit' onClick={()=>fun()}>SUBMIT</button>
           </form>
            <button > post api</button>
        </div>
    );
}

export default Page;
