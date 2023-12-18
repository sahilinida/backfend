'use client'
import React from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { inc } from '../redux/slice';


const Page = () => {

    const dicptch=useDispatch();
    const init={name:'',
                lastname:"",
                phone:"",
                email:''



        }

    const { handleChange,handleBlur,values,handleSubmit}=useFormik({


        initialValues:init,
        onSubmit:(values)=>{
            console.log(values)
        }
    })

const o={name:'sahil inida'}
    const ax= async()=>{
        let dta=  await axios.post('http://localhost:5050/',values)
        console.log(dta.data)
    
        
    }
    let plac="name"
    return (
        <div>

            <form onSubmit={handleSubmit} className='bg-red-400'> 
            <input type="text " name='name' placeholder={plac}  className='m-4 text-red-400' value={values.name} onChange={handleChange} /> <br />
            <input type="text " name='lastname' placeholder='last nama' className='m-4' value={values.lastname} onChange={handleChange} /> <br />
            <input type="text " name='email' placeholder='email' className='m-4' value={values.email} onChange={handleChange} /> <br />
                <input type="text " name='phone' placeholder='phone' className='m-4' value={values.phone} onChange={handleChange} /> <br />
                <button type='submit ' onClick={ax()}  className=   ' rounded-sm  mx-10 p-1 shadow-lg bg-green-300'> submit</button>
            </form>
       
             <button onClick={dicptch(inc)}>disptch</button>

            <h1>this is post method in api</h1>
        </div>
    );
}

export default Page;
