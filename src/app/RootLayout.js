

import { useEffect } from 'react';
import { inter } from './layout';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/react-toastify.css'
import { Providers } from './rtk/provide';
export default function RootLayout({ children }) {


  return (
    <html lang="en">



      <body className={inter.className}>
      {/* <ToastContainer/> */}

{children}





        
       



      </body>
    </html>
  );
}
