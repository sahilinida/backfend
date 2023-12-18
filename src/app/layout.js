
'use client'


import './globals.css'

// export const metadata = {
//   title: 'next  ',
//   description: 'Generated by create next app',
// }
import { Inter } from 'next/font/google'
// import 'react-toastify/dist/react-toastify/css'
import Link from 'next/link'
import Head from './nva/Head'
import 'bootstrap/dist/css/bootstrap.css'
import Foter from './nva/Foter'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Provider from './rtk/prover'
import Navbar from './divv/page'






const inter = Inter({ subsets: ['latin'] })



export default function RootLayout(  
  

  
  { children }


     


  ) {

  useEffect(()=>{
    if(typeof window !== 'undefined'){
require==(' bootstrap/dist/js/bootstrap.bundle.min.js')
    }
},[])


// const path=usePathname();
// console.log(path)

// let log='here loged'
  return (
    <html lang="en">


      <body className={inter.className}>
       {/* {
          path=='/dynimic' ?<h1>this path is here </h1>:<h1>dynimic path not there</h1>
         } */}
     

     <Navbar/>
<Provider>

{children}


</Provider>
<Foter/>




           


   


      
        





       

<ToastContainer/>

  
      </body>
    </html>
  )
}


//   useEffect(()=>{
//     if(typeof window !== 'undefined'){
// require ==(' bootstrap/dist/js/bootstrap.min.js')
//     }
// },[])