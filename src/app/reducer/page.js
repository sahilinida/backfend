'use client'

import React, { useReducer,useRef, useState } from 'react';



const Page = () => {


    const reducer=(state,action)=>{
  switch(action.type){
     case "inc":{
        return state+6
     }
     case "dic":{
        return state-6
     }
  }
    }
 
    const init=5
  

    const [state,disptch]=useReducer(reducer,init)

    
    console.log(state)

    const usere=useRef();

    const [data,setdta]=useState();

    const reff=()=>{
               setdta(usere.current.value)
          
           
    }

    
    let arr=[data]
    console.log(arr)


    


    return (
        <div>

            
            <button className='bg-red-400  m-4' onClick={()=> disptch({type:'inc'})}>click now</button> <br></br>
            <button className='bg-red-400 m-8' onClick={()=> disptch({type:'dic'})}>click now</button>
            <h1>{`that is reducer cheking part ${state}`}</h1>


             <input placeholder='name' ref={usere}></input>

             <button onClick={()=>reff()}>red</button>

        </div>
    );
}

export default Page;
