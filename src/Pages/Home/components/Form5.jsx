import React from 'react'
import cheers from '../../../assets/cheers.png'

import { FaStar } from "react-icons/fa6";
const Form5 = ({ setForm, describes, interest, mathsLevel ,handleSubmit}) => {
 
  return (
    <div>
    <div className='flex sm:flex-col items-center space-x-[60px] sm:space-x-0'>
        <div className='w-[50%] sm:w-[100%] flex justify-center'>
        <img src={cheers} alt="" className='w-[450px] md:w-[300px] sm:w-[250px] h-[80%]' />
        </div>
        <div className='w-[50%] sm:w-[100%]'>
            <h4 className='mainHeading2'>You're on your way!</h4>
           <div className='flex space-x-2 text-[#eea720] text-[30px] my-3'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <p className='mainPara2'>"Through its engaging and well-structured courses, Brilliant has taught me
mathematical concepts that I previously struggled to understand. I now feel
confident approaching both technical job interviews and real world problem
solving situations."<br /> <br />
— Jacob S.</p>
        </div>
    </div>
    <div className='flex justify-center mt-8'>
    <button  onClick={handleSubmit} type='submit' className='formbtnActive'>Continue</button>
    </div> </div>
  )
}

export default Form5