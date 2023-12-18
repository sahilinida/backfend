

'use client'
import React, { useEffect } from 'react';
import axios from axios
import { useState } from 'react';
import { Formik,Form,Field ,ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { Belgrano } from 'next/font/google';

const Page = () => {





    const  [data, setdata] = useState();


    const vali=Yup.object({
        name:Yup.string().required('inter value'),
        sir:Yup.string().min(3,'min 3').max(11,'dontover 11').required('inter sirname'),
        email:Yup.string().email('eamiltype requeade').required('inter email'),
        password:Yup.string().required('inter password')
     
    })


    const getapi=async()=>{
        let callapi=  await axios.post('http://localhost:5050/',values)

    }
    console.log(callapi.data)
 
   
    
    return (
        <div>

            
            <Formik       initialValues={{name:"",email:"",sir:"",password:""}}
            validationSchema={vali}
                onSubmit={(values)=>{
                 
                    setdata(values)
                }}>

                   
          
           

          <Form className='bg-red-50 w-[45%] m-auto mb-4'><ErrorMessage className='bg-green-500' name='name'/>
          <Field type='text' name='name'    placeholder='name' className='m-4' /> <br />
        
          <ErrorMessage className='bg-green-500' name='sir'/>
          <Field type='text' name='sir'    placeholder='sir'  className='m-4'/> <br />
          <ErrorMessage className='bg-green-500' name='email'/>
          <Field type='text' name='email'    placeholder='emial' className='m-4' /> <br />
          <ErrorMessage className='bg-green-500' name='password'/>
          <Field type='password' name='password'    placeholder='password'  className='m-4'/> <br />
        
          <button className='bg-red-600 mx-12 mb-4 mt-6' type='submit' onClick={()=>getapi()}>submit</button>
          </Form>


            </Formik>               


                    

        </div>
    );
}

export default Page;
