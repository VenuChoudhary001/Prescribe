import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { auth, login_auth } from '../../Utility'




export const signUpUser=createAsyncThunk('SignUp',async (val)=>{
    let res=await auth(val);
    console.log(res)
    return res;
})

export const loginUser = createAsyncThunk("LOGIN", async (val) => {
  let res = await login_auth(val);
  console.log(res);
  return res;
});

const userSlice=createSlice({
    name:"USER",
    initialState:{
    
    },
    reducers:{},
    extraReducers:{
        [signUpUser.fulfilled]:(state,action)=>{
            if(action.payload.status===200){
                return {
                    ...action.payload.data
                }
            }
            return {
                err:action.payload.username[0]
            }
        },
        [signUpUser.rejected]:(state,action)=>{
            return{
                err:action.payload
            }
        },
        [loginUser.fulfilled]:(state,action)=>{
           if(action.payload.status===200){
               return {
                   ...action.payload.data
               }
           }
           return {
               err:action.payload.non_field_errors[0] 
           }
        },
        [loginUser.rejected]:(state,action)=>{
            return {
                err:action.payload
            }
        },
        [loginUser.pending]:(state,action)=>{
            return {
                loading:true
            }
        },
       
    }
})


export default userSlice.reducer