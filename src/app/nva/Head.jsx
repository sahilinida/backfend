import Link from 'next/link';
import React from 'react';







const Head = () => {
    return (
        <div>
  <nav className="flex bg-red-400 gap-4 p-2    shadow-lg rounded-md mb-5 ">
<h1 className="text-gray-100 md:text-2xl animate-pulse">official coder😃  </h1>






{/* <input type="textbox" id='cheakbox' className=' hidden  ' ></input>
<label htmlFor="cheakbox" className='hidden   sm:h-2  sm:block  ml-[4px]'><li className=''>cheak</li></label> */}


<ul className="md:flex      md:ml-[141px]   " id='ull'>
<Link href={'js'} className="mx-4   hover:text-gray-50  block ">java sript </Link>
<Link href={'opps'} className="mx-4  hover:text-gray-50 block" >opps 2 </Link>
<Link href={'fetch'} className="mx-4    hover:text-gray-50 block">fetch </Link>
<Link href={'fetch'} className="mx-4    hover:text-gray-50 block">fetch </Link>
<Link href={'qery'} className="mx-4    hover:text-gray-50 block">qery </Link>
<Link href={'./reactred'} className="mx-4    hover:text-gray-50 block">RTK</Link>
</ul> 
</nav>  

           
        </div>
    );
};


Head.propTypes = {

};


export default Head;



{/* <nav className="flex bg-red-400 gap-4 p-2    shadow-lg rounded-md mb-5 ">
<h1 className="text-gray-100 md:text-2xl animate-pulse">official coder😃  </h1>






<input type="textbox" id='cheakbox' className=' hidden  ' ></input>
<label htmlFor="cheakbox" className='hidden   sm:h-2  sm:block  ml-[4px]'><li className=''>cheak</li></label>


<ul className="md:flex sm:bg-red-500  sm:mt-12  sm:ml-[-134px]  md:ml-[31px]  sm:block  sm:h-[327px] " id='ull'>
<Link href={'js'} className="mx-4 sm:mx-[173px] sm:mt-8    hover:text-gray-50  block ">java sript </Link>
<Link href={'opps'} className="mx-4  sm:mx-[173px] sm:mt-8  hover:text-gray-50 block" >opps </Link>
<Link href={'fetch'} className="mx-4 sm:mx-[173px] sm:mt-8   hover:text-gray-50 block">fetch </Link>
<Link href={'react'} className="mx-4 sm:mx-[173px] sm:mt-8   hover:text-gray-50 block">react </Link>
</ul> 
</nav>  */}