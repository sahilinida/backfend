'use client'
import React from 'react';
export default function  (prop)  {
    console.log(prop.params.dymic)
    return (
        <div>
            <h1>{prop.params.dymic}</h1>
            <h1>dyminic data here</h1>
        </div>
    );
}


