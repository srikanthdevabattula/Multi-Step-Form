import React, { useEffect, useState } from 'react'
import loadingimg from '../../../assets/loading.png'
import think2 from '../../../assets/think (1).png'
import C1 from '../../../assets/mathematics.png'
const Form6 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <div className='h-[70vh] flex flex-col items-center justify-center gap-3'>
                <img src={loadingimg} alt="" className='w-[100px] h-[100px] animate-spin'/>
                <h3 className='loadingheading'>Finding learning path recommendations for you based on
your responses</h3>
            </div> : <div>  <div>
        <h1 className='mainHeading'>Learning paths based on your answers</h1>
        <p className='mainPara'>Choose one to get started. You can switch anytime.</p>
        </div>
        <div className='flex sm:flex-col sm:items-center justify-center gap-6'>
            <div className='flex w-[400px] sm:w-[100%] h-[160px] p-3 border-[1px] rounded-[10px] items-center text-[17px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-poppins'>
              <div className='flex flex-col items-center'> <h2 className='font-semibold bg-yellow-300 p-2 rounded-[10px] mb-1 mt-[-20px]'>Popular</h2>
                <h1><span className='font-bold'>Foundational Math</span> Build
your foundational skills in
algebra, geometry, and
probability.</h1></div>
                <img src={C1} alt="" className='w-[100px]'/>
            </div>
            <div className='flex w-[400px] sm:w-[100%] p-3 border-[1px] rounded-[10px] items-center text-[17px] lg:text-[15px] md:text-[13px] sm:text-[11px] font-poppins'>
                <h1><span className='font-bold'>Mathematical Thinking</span>
Build your foundational
skills in algebra, geometry,
and probability.</h1>
                <img src={think2} alt="" className='w-[100px]'/>
            </div>
        </div>
        </div>}
        </div>
    );
}

export default Form6;
