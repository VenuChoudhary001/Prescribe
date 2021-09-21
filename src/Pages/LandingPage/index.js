import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Constants/Button";
import TextBox from "../../Components/Constants/TextBox";
import Modal from "../../Components/Modal";
import Navbar from "../../Components/Navbar";
import { loginUser, signUpUser } from "../../redux/reducers/userAuth";
import { useForm, validate } from "../../Utility";
import {useHistory} from 'react-router-dom'
import BG from "./bg.png";
import Loading from "../../Components/Loading";
import Fade from "react-reveal/Fade";
const Landing = () => {
  const history=useHistory();
  const data=useSelector(state=>state.USER);
  console.log(data)
  const dispatch=useDispatch();
  const [showLogIn,setShowLogIn]=useState(false);
  const [showSignUp,setShowSignUp]=useState(false);
  const email=useForm("");
  const password=useForm("");
  const username=useForm("");
  const [error,setError]=useState({});
  const handleLogIn=()=>{
     let err = validate({
       username: username.value,
       password: password.value,
     });
       if (!err.password && !err.username) {
         setError({});
         dispatch(
           loginUser({
             username: username.value,
             password: password.value,
           })
         );
       } else {
         setError(err);
       }
  }
  const handleSignUp=()=>{
    let err = validate({
      username: username.value,
      password: password.value,
      email: email.value,
    });
 
    if(!err.email && !err.password && !err.username){
       setError({})
      dispatch(signUpUser({username:username.value,password:password.value,email:email.value}))
       
    }else{
         setError(err);
    }
  }
  

   
 

  const SignUpContent = (
    <>
      <article className="flex space-y-4 max-w-screen-sm flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-3">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current text-gray-800"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <TextBox
            err={error && error.username}
            placeholder="Enter your username"
            action={username}
          />
        </div>
         {data.err &&  <div className="text-sm text-red-500 -m-t-2">{data.err}</div>}
        <div className="flex justify-center items-center space-x-3">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current text-gray-800"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <TextBox
            err={error && error.email}
            type="email"
            placeholder="Enter your email"
            action={email}
          />
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current text-gray-800"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <TextBox
            err={error && error.password}
            type="password"
            placeholder="Enter your password"
            action={password}
          />
        </div>

        <Button
          lable="Sign up"
          styles="border-2 p-1 text-xl font-Poppins hover:bg-gray-900 hover:text-white rounded-sm w-36 text-gray-900 border-gray-500"
          action={handleSignUp}
        />
      </article>
    </>
  );

  const LogInContent = (
    <>
      <article className="flex space-y-4 max-w-screen-sm flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-3">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current text-gray-800"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <TextBox
            err={error && error.username}
            placeholder="Enter your username"
            action={username}
          />
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <TextBox
            type="password"
            placeholder="Enter your password"
            action={password}
            err={error && error.password}
          />
        </div>

        <Button
          lable="Login"
          styles="border-2 p-1 text-xl font-Poppins hover:bg-gray-900 hover:text-white rounded-full md:rounded-sm focus:bg-gray-900 focus:text-white w-36 text-gray-900 border-gray-500"
          action={handleLogIn}
        />
      </article>
    </>
  );
  if (data.token) {
   
    history.push("/dashboard");
  }
  if(data.user){
     history.push("/dashboard");
  }
  if(data.loading){
    return <Loading/>
  }
  return (
    <>
      <Navbar />
      <section className="my-4 grid grid-cols-12 gap-3 ">
        <div className="md:col-span-1 hidden md:block"></div>
        <main className="md:hidden col-span-12">
          <img
            src={BG}
            className="max-w-screen-sm object-contain w-full"
            alt=""
          />
        </main>
        <main className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start space-y-8 justify-center ">
          <Fade left>
            <div className="text-center md:text-left text-xl md:text-3xl font-DmMono italic text-gray-700">
              Having issues tracking your health??
            </div>
          </Fade>

          <div className="flex justify-start items-start space-x-4">
          <Fade left>

            <Button
              styles="text-white w-36 md:w-48 rounded-full p-2 font-Poppins text-md md:text-2xl bg-indigo-500 hover:bg-indigo-600"
              lable="Log In"
              action={() => setShowLogIn(true)}
            />
            </Fade>
          <Fade left>
            
            <Button
              styles="text-white  w-36 md:w-48 rounded-full p-2 font-Poppins text-md md:text-2xl bg-secondary-500 hover:bg-secondary-600"
              lable="Register"
              action={() => setShowSignUp(true)}
            />
            </Fade>
          </div>
        </main>
        <main className="hidden md:block md:col-span-5">
          <img
            src={BG}
            className="max-w-screen-sm object-contain w-full"
            alt=""
          />
        </main>
      </section>
      <Modal
        content={SignUpContent}
        open={showSignUp}
        close={() => setShowSignUp(false)}
        title="Register"
      />
      <Modal
        content={LogInContent}
        open={showLogIn}
        close={() => setShowLogIn(false)}
        title="Log In"
      />
    </>
  );
};

export default Landing;
