
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';




const Page = () => {


  const arr=  {name:"sahil",age:22,add:"khamriya suajt harraiya basti"}

const [data,setdata]=useState();

// useEffect( async()=>{
//        const fet = await fetch("http://localhost:5050/post",{
//         method:'post',
//         body:JSON.stringify({"NAME":"sahil india ract in cme"}),
     
//        });
//          const rel= await fet.json();
//          setdata(rel);

      //  useEffect(()=>{
      //       const  apii= async ()=>{
      //         const rel=await fetch('http://localhost:5050')
              //    method: 'POST', 
              // mode: 'cors', 
              // 'Content-Type': 'application/json',
              // body: JSON.stringify({"name":"post method send now"}) // body data type must match "Content-Type" header
        

           
            //   const reltu= await rel.json();
      
            //   setdata(reltu)
         
            
            // }

            // apii();

    
      //  },[])

      //  console.log(data.name)



    return (
        <div className='m-2 p-1 bg-gray-100'>
            <h1> </h1>
            <h1 className=" md:text-2xl tb:text-2xl md:ml-[33px] mb-2 sm:text-[23px]   md:  text-red-500">what is reduex reduex kya hota hai (RTK in hindi RTK क्या होता है ) </h1>
            <p>
                  RTK (REDUEX TOOL KIK)reduex tool kit क्या होता है react js में और इसका क्या काम होता है 
                  react js में हम इसका use क्यों करे इसका use से हमको क्या फायदा होता है क्या या react js में ज्यादा जरुरी है क्या 
                  reduex tool kit के बिना हम react js में website नही बना सकते क्या इसका use करना बहुत जरुरी होता है क्या 
                  आज हम जानते है की react js reduex tool kit क्या होता है इसका use हम क्यों करते है आज हम RTK के बारे में 
                  सब जानते है क्यों है क्या काम करता है और कैसे काम करता है 

            </p>          
                    <Link href={'./react'} className='text-blue-500 mx-[55%] underline'>usesatate</Link>
            <h1 className=" md:text-2xl tb:text-2xl md:ml-[33px] mt-2 mb-2 sm:text-[23px]   md:  text-red-500">why to use RTK  in react in hindi (reduex tool kit क्यों use करे हम ?)</h1>

              <p>
                हम react js में reduex tool kit (RTK ) use क्यों करे reduex tol kit एक statemanegment को अच्छे से use करने में 
                मदद देती है जैसे की usesatate में हम statemanegment करते है उसी तरह हम reduex tool kit का use 
                करके statemanegment करते है लेकिन हम usesatate के मदद से बहुत ज्यादा statemanegment नही कर सकते है 
                जिससे हमको बहुत परेसानी होती है उसी को आसान और बेतर बनाने के लिए reduex tool kit का use करते है 
                जिससे हम बहुत अच्छे और बेतरीन तरीके से statemanegment को अच्छे से handel कर सके और जिससे हमारा application 
                में कही सारे state एक ही साथ change कर सके क्योकि जब हमारा website में बहुत सारे state को एक ही साथ 
                बदलना होता है तो हमे usesatate में बहुत परेशानी होती है जिसको हम reduex tool kit से सबको दूर 
                कर सकते है और statemanegment को अच्छे से अपनी website में use कर सकते है जिससे हमारा UX और भी ज्यादा 
                अच्छा हो सके जिसे हमारी application अच्छे से काम कर सके 
              </p>
              <h1 className=" md:text-2xl tb:text-2xl md:ml-[33px] mt-2 mb-2 sm:text-[23px]   md:  text-red-500">how add reduex tool kit in react in hindi (RTK  को कैसे  use करे react js में )</h1>


        {/* {

          arr.map((tt)=>{

            return(<>
            
            <h1>{tt.name}</h1>
            </>)
          })
        } */}

        <h1>{arr.name}</h1>
           
        {/* <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.add}</h1> */}

        </div>
    );
};





export default Page;
