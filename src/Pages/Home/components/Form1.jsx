import React from 'react'
import student from '../../../assets/student.png'
import Professional from '../../../assets/professionals.png'
import parent from '../../../assets/parents.png'
import old from '../../../assets/old-people.png'
import teacher from '../../../assets/teacher_10559204.png'
import other from '../../../assets/man_4140057.png'
const Form1 = ({setDescribes,describes,setForm}) => {
  return (
    <div>
        <div>
        <h1 className='mainHeading'>Which Describes You best?</h1>
        <p className='mainPara'>This will help us personalize your experience</p>
        </div>

        <div className='flex flex-col items-center my-6 gap-6'>
            <div onClick={()=>setDescribes('Student')} className={`decitem ${describes=='Student'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] '}`}>
                <img src={student} alt="" className='decImg'/>
                <h3>Student <span className='decspan'>or soon to be enrolled</span></h3>
            </div>

            <div onClick={()=>setDescribes('Professional')} className={`decitem ${describes=='Professional'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={Professional} alt="" className='decImg'/>
                <h3>Professional <span className='decspan'>pursuing a career</span></h3>
            </div>
            <div onClick={()=>setDescribes('Parents')} className={`decitem ${describes=='Parents'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={parent} alt="" className='decImg'/>
                <h3>Parents <span className='decspan'>of a school-age child</span></h3>
            </div>
            <div onClick={()=>setDescribes('Lifelong learner')} className={`decitem ${describes=='Lifelong learner'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={old} alt="" className='decImg'/>
                <h3>Lifelong learner </h3>
            </div>
            <div onClick={()=>setDescribes('Teacher')} className={`decitem ${describes=='Teacher'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={teacher} alt="" className='decImg'/>
                <h3>Teacher</h3>
            </div>
            <div onClick={()=>setDescribes('Other')} className={`decitem ${describes=='Other'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={other} alt="" className='decImg'/>
                <h3>Other</h3>
            </div>
        </div>
        <div className='formbtn'>
            {describes!=''&& <button onClick={()=>setForm(40)} className='formbtnActive'>Continue</button>}
           
           {describes==''&& <button className='formbtnInActive'>Continue</button>}
       
        </div>

    </div>
  )
}

export default Form1