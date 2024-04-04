import React from 'react'
import graph from '../../../assets/bar-chart.png'
import earth from '../../../assets/earth.png'
import think from '../../../assets/think.png'
import target from '../../../assets/target.png'
import eyes from '../../../assets/eyes.png'

const Form2 = ({setInterest,interest,setForm}) => {
  return (
    <div>
        <div>
        <h1 className='mainHeading'>Which are you most interest in?</h1>
        <p className='mainPara'>Choose just one. This will help us get you started(but won't limit your experience).</p>
        </div>

        <div className='flex flex-col items-center my-6 gap-6'>
            <div onClick={()=>setInterest('Learning specific skill to advance my career')} className={`decitem2 ${interest=='Learning specific skill to advance my career'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] '}`}>
                <img src={graph} alt="" className='decImg'/>
                <h3>Learning specific skill to advance my career</h3>
            </div>

            <div onClick={()=>setInterest("Exploring new topics I'm interested in")} className={`decitem2 ${interest=="Exploring new topics I'm interested in"?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={earth} alt="" className='decImg'/>
                <h3>Exploring new topics I'm interested in</h3>
            </div>
            <div onClick={()=>setInterest('Refreshing my math foundations')} className={`decitem2 ${interest=='Refreshing my math foundations'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={think} alt="" className='decImg'/>
                <h3>Refreshing my math foundations</h3>
            </div>
            <div onClick={()=>setInterest('Exercising my brain to stay sharp')} className={`decitem2 ${interest=='Exercising my brain to stay sharp'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={target} alt="" className='decImg'/>
                <h3>Exercising my brain to stay sharp </h3>
            </div>
            <div onClick={()=>setInterest('Something else')} className={`decitem2 ${interest=='Something else'?'border-[#efe9b0] border-[2px] shadow-lg':' border-[1px] s'}`}>
                <img src={eyes} alt="" className='decImg'/>
                <h3>Something else</h3>
            </div>
           
        </div>
        <div className='formbtn'>
            {interest!=''&& <button onClick={()=>setForm(60)} className='formbtnActive'>Continue</button>}
           
           {interest==''&& <button className='formbtnInActive'>Continue</button>}
       
        </div>

    </div>
  )
}

export default Form2