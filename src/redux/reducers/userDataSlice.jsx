import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getUserData, uploadData, UploadPrescription } from '../../Utility';


export const uploadPres=createAsyncThunk("UPLOAD_PRESCRIPTION",async (val)=>{
    let res=await UploadPrescription(val)
    console.log(res)
    return res;
} )

export const fetchUser=createAsyncThunk("FETCH/USER",async (val)=>{
    let res=await getUserData(val);
    console.log(res)
    return res;
})


export const addData = createAsyncThunk("ADD_DATA", async (val) => {
  let res = await uploadData(val);
  console.log(res);
  return res;
});
const userDataSlice = createSlice({
  name: "USER/DATA",
  initialState: {
      pres:[],
      count:""
  },
  reducers: {},
  extraReducers: {
    [addData.fulfilled]: (state, action) => {
      console.log(action);
      return {
        ...state,
        loading: false,
        ...action.payload.data,
      };
    },
    [addData.rejected]: (state, action) => {
      console.log(action);
      return {
        ...state,
      };
    },
    [addData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [uploadPres.fulfilled]:(state,action)=>{
        console.log(action);
        return {
          ...state,
          loading: false,
          pres: [...state.pres, {...action.payload.data}],
        };
    },
    [uploadPres.pending]:(state,action)=>{
        return {
            ...state,
            loading:true
        }
    },
    [uploadPres.rejected]:(state,action)=>{
        console.log(action)
        return {
            ...state
        }
    },
    [fetchUser.fulfilled]:(state,action)=>{
        return {
            ...state,
            pres:[
                ...state.pres,...action.payload.data
            ]
        }
    }
  },
});


export default userDataSlice.reducer