import React from 'react'
import math from '../../../assets/math.png'
import math2 from '../../../assets/formula.png'
import math3 from '../../../assets/square-root.png'

import math4 from '../../../assets/whiteboard.png'

const Form4 = ({mathsLevel,setMathsLevel,setForm}) => {
  return (
    <div>
        <div>
        <h1 className='mainHeading'>What is your math comfort level?</h1>
        <p className='mainPara'>Choose the highest level you feel confident in you can always adjust later.</p>
        </div>

        <div className='flex md:flex-wrap justify-center items-center my-6 gap-6'>
            <div onClick={()=>setMathsLevel('Introductory')} className={`comfortitem ${mathsLevel=='Introductory'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] '}`}>
                <img src={math4} alt="" className='mathImg'/>
                <h3>Arithmetic </h3>
                <p className='confortItempara'>Introductory</p>
            </div>

            <div onClick={()=>setMathsLevel("Foundational")} className={`comfortitem ${mathsLevel=="Foundational"?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={math3} alt="" className='mathImg'/>
                <h3>Basic Algebra</h3>
                <p className='confortItempara'>Foundational</p>
            </div>
            <div onClick={()=>setMathsLevel('Intermediate')} className={`comfortitem ${mathsLevel=='Intermediate'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={math} alt="" className='mathImg'/>
                <h3>Intermediate Algebra</h3>
                <p className='confortItempara'>Intermediate</p>
            </div>
          
            <div onClick={()=>setMathsLevel('Advanced')} className={`comfortitem ${mathsLevel=='Advanced'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={math2} alt="" className='mathImg'/>
                <h3>Calculus</h3>
                <p className='confortItempara'>Advanced</p>
            </div>
           
        </div>
        <div className='formbtn'>
            {mathsLevel!=''&& <button onClick={()=>setForm(100)} className='formbtnActive'>Continue</button>}
           
           {mathsLevel==''&& <button className='formbtnInActive'>Continue</button>}
       
        </div>

    </div>
  )
}

export default Form4