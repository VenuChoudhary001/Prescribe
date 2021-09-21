import axios from 'axios';
import { useState } from 'react';
const API = "https://pres-cribe.herokuapp.com";

export const useForm=(val)=>{
    const [value,setValue]=useState(val);

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    return ({
        value,
        onChange:handleChange
    })
}

//Register user
export const auth=async (val)=>{
   try {
       let res = await axios.post(`${API}/api/register/`,{...val})
  
       return res;
   } catch (error) {
       return error.response.data
   }
}
//Ligin user
export const login_auth=async (val)=>{
    try {
        let res= await axios.post(`${API}/api/login/`,{...val});
        return res;
    } catch (error) {
        return error.response.data
    }
}

export const validate=(val)=>{
    let errors={};
    if(!email_validatification(val.email)){
        errors.email="Please enter a valid email"
    }
    if(val.email===""){
        errors.email="Please enter your email"
    }  
    if (val.password.length <= 5) {
      errors.password = "Minimum length must be 6";
    }
    if(val.password===""){
        errors.password="Please enter your password"
    }
  
    if(val.username===""){
        errors.username="Please enter your username"
    }
    return errors;
}

export const email_validatification=(val)=>{
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(val).toLowerCase());
}


export const uploadData=async (val)=>{
    try {
        let res = await axios.post(`${API}/tracker/detail/`,{...val});
        return res;
    } catch (error) {
        return error.response.data
    }
}


export const UploadPrescription=async (val)=>{
    
    const data=new FormData();
    data.append("prescription_image",val.file,val.file.name)
    data.append("user",val.user)
    try {
        let res = await axios.post(`${API}/tracker/prescription/`,data,{headers:{
            "content-type":"multipart/form-data"
        }});
        return res;
    } catch (error) {
        return error.response.data
    }
}


export const getUserData=async (val)=>{
    try {
        let res = await axios.get(`${API}/tracker/prescription/${val}/`);
        console.log(res)
        return res;
    } catch (error) {
        return error.response.data
    }
}


export const getQuote=async ()=>{
    try {
         let res = await axios.get(
           "http://quotes.rest/qod.json?category=inspire"
         );
         return res.data;
    } catch (error) {
        console.log(error)
    }
   
}