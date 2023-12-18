
'use client'
import React from 'react';
import schema from './schema';
import { useFormik } from 'formik';

const Page = () => {

         const inivalue={
          firname:'',
          sir:'',
          email:'',phone:'',
          password:''
         }
       
             const {handleBlur,handleChange,values, handleSubmit, errors}=useFormik({
                         initialValues:inivalue,
                         validationSchema:schema,
                         onSubmit:values=>{
                            console.log(values)
                       

                         }
             })
             console.log(errors.sir)

    return (
        <div>
                    <form action="" className='bg-green-400 m-5 h-[323px]' onSubmit={handleSubmit}>
                    
                           <input type="text" name='firname' onChange={handleChange}  placeholder='firsname' value={values.firname } className='m-2 shadow-xl'   /> <br /> {errors.firname?<span>{errors.firname}</span>:<h1>wirte now</h1>}
                           <input type="text" name='sir' onChange={handleChange}  placeholder='sir' value={values.sir } className='m-2 shadow-xl' /><br />
                           <input type="text" name='email' onChange={handleChange}  placeholder='email' value={values.email } className='m-2 shadow-xl' /><br />
                           <input type="number" name='phone' onChange={handleChange}  placeholder='phone' value={values.phone } className='m-2 shadow-xl' /><br />
                           <input type="password" name='password' onChange={handleChange}  placeholder='password' value={values.password } className='m-2 shadow-xl' /><br />


                       <button className='bg-red-300 rounded-md'>click now </button>
                    </form>
        </div>
    );
}

export default Page;
