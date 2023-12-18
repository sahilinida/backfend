'use client'

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import{animated,useSpring}from '@react-spring/web'

const Page = () => {
  const [text,settext]=useState(false)

const ani=useSpring({
     from:{font:0},
     to:{font:100}
})

  // const[tada,setdata]=useState()
  // const fet=async()=>{
  //   let gg= await  fetch ('http://localhost:5050');
    
  //   const th=await gg.json()
  //   setdata(th)
  // }
  // console.log(tada)
  const a=11;
    return (

      
        <div className="m-2 p-1 bg-gray-100">


              < animated.div style={ani}>
                heloo
              </animated.div>

            <h1 className="  mt-4 mb-4 md:text-3xl tb:text-2xl sm:text-[22px] md:ml-[23px]   text-red-500">what is formik and yup (formik kya hai react js में इसका use  कैसे करे) </h1>
       

             <p>
              react js में formik और yup क्या होता है इसका use क्या है react js में हम इसका use क्यों 
              करे इसके use से हमे क्या फायदा होता है तो आज हम जनते है की formik and yup क्या होता है 
              react js में और हम इसका use क्यों करते है बिना formik और yup के हम react js में काम नही कर पाएंगे क्या 
              formik और yup करना जरुरी है क्या ?

             </p>

             <div className="bg-red-500 flex  justify-center p-2 sm:w-[93%]  md:mx-[30%] rounded-lg">

<img src="./img/tt.png  "></img>
</div>

             <h1 className="  mt-4 mb-4 md:text-3xl tb:text-2xl sm:text-[22px] md:ml-[23px]   text-red-500">why to use formik in react js (formik का use क्यों करे react js में ) </h1>

                   <p>
                    react js में हम formik और yup का use इसलिए करते है किससे हमारा काम आसान हो सके 
                    और हमको कम time में ज्यदा code लिख और हमारा बहुत ज्यादा काम को आसानी से करने में मदद देता है formik 
                    जैसे की आप लोगो को formik के नाम से ही पता चल रहा होगा की ये form के काम में use किया जाता होगा 
                    formik का काम होता है की form के data को आसानी से get करना जिससे devlopers को ज्यादा काम न करना पड़े 
                    और जिससे उनका काम आसान हो जये 
                   </p>
              
                   <Link href={'./react '} className=  'text-blue-600 hover:text-[22px] m-4 underline ml-[45%] '> what is usesatate</Link>
                   <h1 className="  mt-4 mb-4 md:text-3xl tb:text-2xl sm:text-[22px] md:ml-[23px]   text-red-500">what is formik and yup (formik और yup दोनों के बीच का use ) </h1>
                  
                  <p>
                 
                    formik और yup के बीच में क्या अन्तर है क्या या दोनों एक ही या दोनों अलग है <span className='text-red-400 text-[20px]'>formik or yup </span> इनका क्या काम 
                    होता है   react js में हमको दोनों का use करना चाहिए या एक का use करना चाहिए हम आज जानते है की 
                    formik और yup दोनों का करे या एक ही use kare  और दोनों का use करना अच्छा होता है 

                  </p>

                  <p>
                    हम formik का use react js में form के data को get करने के लिए करते है formik 
                    का use करके हम बहुत ही आसानी से form के value को get कर सकते है ये नही है की हम
                    बिना formik के form की value को get नही कर सकते है हम बिना formik के भी form की vlaue को get 
                    कर सकते है लेकिन उससे हमारा time और jyada code लिखना पड़ता है जिससे हमको काम करने में थोड़ी परेशानी 
                    होती लेकिन ये नही की हम बिना formik के data को get नही कर सकते है  formik एक packeg है जो हमको 
                    form के data को get करने में मदद करता है और जिससे हमारा काम fasted तरीके से होता है जिससे हमको 
                    काम करने में आसानी और मजा भी आता है  

                  </p>
                  <h1 className="  mt-4 mb-4 md:text-3xl tb:text-2xl sm:text-[22px] md:ml-[23px]   text-red-500">what is yup (yup क्या है formik में इसका use क्या है ) </h1>

                  <p>
                    react js में formik के साथ yup क्या होता है और हम इसका use क्यों करे क्या इसके use के बिना हम formik 
                    को use नही कर पाएंगे क्या इसका use करना जरुरी होता है क्या ? तो आज हम जानते है की formik के साथ yup
                    use करना जरुरी है क्या एसा नही है की हम बिना yup के formik का use नही कर सकते है हम yup के बिना भी formik
                    का use कर सकते है लेकिन हम yup का use क्यों करे yup का हम form में input में validation करने के लिए करते है
                    yup का use करके  हमको बिना ज्यदा code किये बिना अपने wevpage में validation का use कर पाते है 
                    formik और yup NPM का packeg है किसको हम install करके दोनों packeg का use करते है 

                  </p>

                  <h1 className="  mt-4 mb-4 md:text-3xl tb:text-2xl sm:text-[22px] md:ml-[23px]   text-red-500"> formik and yup install (formik और yup कैसे install करे ) </h1>







         

        </div>
    );
};





export default Page;
