import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card';

import Button from '../../Components/Constants/Button';
import FloatingButton from '../../Components/FloatingButton';
import Loading from '../../Components/Loading';
import BP from '../../Assets/blood-pressure.png'
import BS from '../../Assets/blood-test.png'

import BMI from '../../Assets/bmi.png'
import HEART from "../../Assets/heart.png";
import KIDNEY from '../../Assets/kidneys.png'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Components/Modal';
import TextBox from '../../Components/Constants/TextBox';
import DropDown from '../../Components/Constants/DropDown';
import { addData } from '../../redux/reducers/userDataSlice';
import { useForm } from '../../Utility';
import DashboardNav from '../../Components/DashboardNav';

const Dashboard = () => {
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const data=useSelector(state=>state.USER);
  const USER_DATA=useSelector(state=>state.USER_DATA)
  const dispatch=useDispatch();
  const [show,setShow]=useState(false);
  const age=useForm("");
  const height=useForm("")
  const weight = useForm("");
  const bloodsugar = useForm("");
  const cholesterol = useForm("");
  const sysbp = useForm("");
  const diabp = useForm("");
  const creatinine=useForm("")
  const [sex,setSex]=useState("MALE")
  console.log(sex)
  const handleSubmit=()=>{
    dispatch(addData({
      user:data.user.id,
      age:age.value,
      height:height.value,
      weight:weight.value,
      bloodsugar:bloodsugar.value,
      cholesterol:cholesterol.value,
      sysbp:sysbp.value,
      diabp:diabp.value,
      gender:sex,
      creatinine:creatinine.value
    }))
    setShow(false)
  }
  const ADD_FORM = (
    <>
      <article className="flex flex-col space-y-4 font-normal font-Poppins overflow-auto">
        <TextBox placeholder="Enter your age" label="Age" action={age} />{" "}
        <DropDown options={["MALE", "FEMALE", "OTHER"]} lable="Gender" action={(e)=>setSex(e.target.value)}/>
        <TextBox placeholder="Enter your height" label="Height (in cm)" action={height}/>{" "}
        <TextBox placeholder="Enter your weight" label="Weight (in kg)" action={weight} />{" "}
        <TextBox
          placeholder="Enter your blood sugar level"
          label="Blood Sugar(mg/dL)"
          action={bloodsugar}
        />
        <TextBox
        action={sysbp}
          placeholder="Enter your blood pressure"
          label="Systolic Blood Pressure(mm Hg)"
        />
        <TextBox
          placeholder="Enter your blood pressure"
          label="Diastolic Blood Pressure(mm Hg)"
          action={diabp}
        />
        <TextBox
          placeholder="Enter your cholestrol levels"
          label="Cholestrol (mg/dL)"
          action={cholesterol}
        />
        <TextBox
          placeholder="Enter your creatinine levels"
          label="Creatinine (mg/dL)"
          action={creatinine}
        />
        <Button action={handleSubmit} lable="SUBMIT" type="pink" styles="p-1 block mx-auto hover:bg-gray-800 hover:text-white w-24 text-lg rounded-full border-2 border-gray-800 text-gray-800" />
      </article>
    </>
  );

  let BLOOD_PRESSURE=USER_DATA.diabp && STAT_CONTENT({title:"Blood Pressure",img_url:BP,content:USER_DATA.bptext,data:`${USER_DATA.diabp}/${USER_DATA.sysbp}`})
  let BLOOD_SUGAR=USER_DATA.bloodsugar && STAT_CONTENT({title:"Blood Sugar",img_url:BS,content:USER_DATA.bloodsugartext,data:USER_DATA.bloodsugar})
  let CHOLESTROL=USER_DATA.cholesterol && STAT_CONTENT({title:"Cholestrol",img_url:HEART,content:USER_DATA.cholesteroltext,data:USER_DATA.cholesterol})
  let BMI_DATA=USER_DATA.bmi && STAT_CONTENT({title:"BMI",img_url:BMI,content:USER_DATA.bmitext,data:USER_DATA.bmi});
  let CREATININE=USER_DATA.creatinine && STAT_CONTENT({title:"Creatinine",img_url:KIDNEY,content:USER_DATA.creatininetext,data:USER_DATA.creatinine})
  const WELCOME_CONTENT=(<>
    <div className="text-4xl w-full overflow-hidden text-white p-4 font-Poppins font-normal">Welcome </div>
  </>)
  useEffect(()=>{
    setInterval(()=>{
     setHours(new Date().getHours());
     setMins(new Date().getMinutes())
    },1000)
  },[])
  const BANNER_CONTENT = (
    <>
      <article className="p-3 flex justify-between text-white">
        <div className="flex flex-col max-w-max space-y-1">
          <div className="font-extralight font-Poppins text-6xl">
            {hours}:{mins}
          </div>
          <div className="text-3xl font-extralight">
            {new Date().getDate()}{" "}
            {new Date().toLocaleDateString("en-US", { month: "long" })} ,{" "}
            {new Date().getFullYear()}
          </div>
          <div className="text-3xl font-extralight">
            {new Date().toLocaleDateString("en-US", { weekday: "long" })}
          </div>
        </div>
        <div className="flex text-right flex-col">
          <div className="text-lg font-light">Last Updated on</div>
          <div className="text-4xl font-normal">{data.created && data.created}</div>
        </div>
      </article>
    </>
  );
     if(!hours ){
       return <Loading/>
     }
    return (
      <>
        <section className="grid grid-cols-12 space-y-4  ">
          <DashboardNav />
          <main className="col-span-2">
            <Card
              styles=" p-2 h-full welcome text-white rounded-sm shadow-2xl m-2"
              content={WELCOME_CONTENT}
            />
          </main>
          <main className="col-span-10 mr-4">
            <Card
              styles=" w-full shadow-2xl h-full bg-green-700 p-2 m-2 rounded-sm"
              content={BANNER_CONTENT}
            />
          </main>
          {USER_DATA.loading && (
            <main className="col-span-12">
              <Loading />
            </main>
          )}
          {!USER_DATA.loading && USER_DATA.height && (

            <> 
          
              <main className="col-span-3">{BLOOD_PRESSURE}</main>
              <main className="col-span-3">{BLOOD_SUGAR}</main>
              <main className="col-span-3">{BMI_DATA}</main>
              <main className="col-span-3">{CHOLESTROL}</main>
              <main className="col-span-3">{CREATININE}</main>
            </>
          )}

          <FloatingButton action={() => setShow(true)} />
        </section>
        <Modal
          open={show}
          close={() => setShow(false)}
          content={ADD_FORM}
          title="Uplaod Medical Data"
        />
      </>
    );
}


export  const STAT_CONTENT = ({ img_url, content, data, title }) => (
  <>
    <div className="flex justify-center items-center text-center m-2 h-full shadow-2xl items-center flex-col p-2 space-y-2">
      <div className="">
        <img src={img_url} className="stat_img" alt="" />
      </div>
      <div className="text-xl text-gray-900 ">{title}</div>
      <div className="text-2xl text-gray-800 font-bold">{data}</div>
      <div className={`text-md ${content.includes('high') || content.includes('low')?'text-red-600':'text-green-500'}  font-bold`}>{content}</div>
    </div>
  </>
);


export default Dashboard
