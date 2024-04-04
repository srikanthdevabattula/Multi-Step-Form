import React from 'react'
import dignity from '../../../assets/dignity.png'
const Form3 = ({setForm}) => {
  return (
    <div>
    <div className='flex sm:flex-col items-center space-x-[60px] sm:space-x-0 sm:space-y-3'>
        <div className='w-[50%] sm:w-[100%] flex justify-center'>
        <img src={dignity} alt="" className='w-[450px] md:w-[300px] sm:w-[250px] h-[80%]'/>
        </div>
        <div className='w-[40%] sm:w-[100%]'>
            <h4 className='mainHeading'>You're in the right place</h4>
            <p className='mainPara'>Brilliant gets you hands-on to help improve your professional
skills and knowledge. You'll interact with concepts and solve
fun problems in math, science, and computer science.</p>
        </div>
    </div>
    <div className='flex justify-center mt-8'>
    <button onClick={()=>setForm(80)} className='formbtnActive'>Continue</button>
    </div> </div>
  )
}

export default Form3