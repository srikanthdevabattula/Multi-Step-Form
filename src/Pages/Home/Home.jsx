import React, { useState } from "react";


import CustomizedProgressBars from "../ProgressBar/ProgressBar";
import { FaArrowLeft } from "react-icons/fa";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Form5 from "./components/Form5";
import Form6 from "./components/Form6";

const Home = () => {

 const [form,setForm]=useState(20)
 const [describes,setDescribes]=useState('')
 const [interest,setInterest]=useState('')
 const [mathsLevel,setMathsLevel]=useState('')

 const handleSubmit = (e) => {
	e.preventDefault();

console.log("Describes:", describes);
	console.log("Interest:", interest);
	console.log("Maths Level:", mathsLevel);

	
	setForm(0);
  };

  return (
    <section>
		{form==0?null:<div className="flex items-center scrollbar-hide">
			<div className="w-[40px] sm:w-[20px]">{form>20&&<FaArrowLeft onClick={()=>setForm(form-20)}/>}</div>
    <CustomizedProgressBars form={form}/>
	</div>}
	<div className="p-[50px] lg:p-[40px] md:p-[30px] sm:p-[20px]">
		<form action="" onSubmit={handleSubmit}>
	{form==20&&<Form1 describes={describes} setDescribes={setDescribes} setForm={setForm}/>}
	{form==40&&<Form2 interest={interest} setInterest={setInterest} setForm={setForm}/>}
	{form==60&&<Form3 setForm={setForm}/>}
	{form==80&&<Form4 setForm={setForm} mathsLevel={mathsLevel} setMathsLevel={setMathsLevel}/>}
	{form == 100 && <Form5 setForm={setForm} describes={describes} interest={interest} mathsLevel={mathsLevel} onSubmit={handleSubmit} />}
       
	</form>
	{form==0&&<Form6 setForm={setForm}/>}
	</div>
    </section>
  );
};

export default Home;
