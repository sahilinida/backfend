'use client'

import  React, { useEffect, useState } from 'react';
import Formscima from './Formscima';
import { useFormik } from 'formik';
import axios from 'axios';






const Page = () => {
    const  [data, setdata]=  useState();

    

    
const initialValue={
    sir:'',eamil:'',password:'',fname:''
}
    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
        initialValues:initialValue,
        validationSchema:Formscima,
        onSubmit:(values)=>{
            console.log(values)
            console.log(errors.email)
            setdata(values)
            console.log(data.name)
        }
    })

    const [dat,setd]=useState()
  const api = async ()=>{
    let username='ram'
    let age=56
    const uer= await axios.post('http://localhost:5050/newpost',username)
   
 
   console.log(uer.data)
  }

// let api= async ()=>{
//     let apii=  await axios.get('http://localhost:5050')
//     console.log(apii.data)
    
// }


    return (
        <div>
       
<form action="" onSubmit={handleSubmit} className='bg-red-500 m-4'>

<input className='m-4' type="text " name='fname' placeholder='fname'  value={values.fname} onChange={handleChange} onBlur={handleBlur}  /><br /> {errors.fname && touched?<span>{errors.fname}</span>:null}
 <input className='m-4' type="text " name='sir' placeholder='sir'  value={values.sir} onChange={handleChange} onBlur={handleBlur}  /><br /> <span>{errors.sir}</span>

<input className='m-4' type="text " name='email'  placeholder='email'  value={values.email} onChange={handleChange} onBlur={handleBlur} /><br /> <span>{errors.eamil}</span>
<input className='m-4' type="password" name='password'  placeholder='password'  value={values.password} onChange={handleChange} onBlur={handleBlur} /><br /> <span>{errors.password}</span>

<input type="submit" value="submit" onClick={()=>api()}  />


</form>


{/* 
<h1>{data.name}</h1> */}


        <button onClick={()=>api()}> call api</button>

 
        </div>
    );
};




export default Page;
