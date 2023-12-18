'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {

  const get=55;


    const [data,setdata]=useState();

    const [to,settodo]=useState([]);

    const addtodo=()=>{
          settodo([...to,data])
      
        console.log('gekko')
    }
const delto=(i)=>{
    console.log('call remove')
    toast.success('call remove'+i)

       const netodo =to.filter((itm,id)=>{
        return i!==id
       })
       settodo(netodo)

}

    console.log(to)
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a clasnameclassNames="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            <h1>this is todo list is new todo lost </h1>


            <div className='bg-red-300 p-4' >

                <input type='text ' className='bg-gray-200' name='name' onChange={(e)=>setdata(e.target.value)} placeholder='inter todo '/> 
                <button className='bg-green-300 mt-6'  onClick={()=>addtodo()} > add todo</button>

                          {

                          to.map((itme,i)=>{
                                return(
                                      <div className='flex bg-gray-50 m-2 p-2'>

                                          <h1 className='mx-4'>{itme}</h1> <button className='bg-green-300 p-1' onClick={()=>delto(i)}> remove</button>

                                      </div>
                                )
                            })
                          }

                      


            </div>

            <button className='bg-success'> boostrap</button>
        </div>
    );
}

export default Page;
