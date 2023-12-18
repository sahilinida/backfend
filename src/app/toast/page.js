'use client'
import React from 'react';
import { toast } from 'react-toastify';

const Page = () => {

    const tos=()=>{
        toast.warning('nuring toastify')
    }
    return (
        <div>
            <h1>this is toastify </h1>

            <button onClick={()=>tos()}> click toast</button>
        </div>
    );
}

export default Page;
