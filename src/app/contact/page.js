'use client'
import { useFormik } from 'formik';
import React, { useState } from 'react';

const page = () => {
    const {handleBlur,handleChange,values,handleSubmit} =useFormik(

        onsubmit()
        
    )

    const [pass,setpass]=useState('password')
    return (
        <div>
            <h1>this is contact page</h1>


          <div className=' flex'>  <input type={pass} placeholder='password'/> <button onClick={()=>setpass('text')}> show</button></div>
        </div>
    );
}

export default page;
