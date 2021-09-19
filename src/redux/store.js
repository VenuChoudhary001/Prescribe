import {configureStore} from '@reduxjs/toolkit'
import userSlice from './reducers/userAuth'
import userDataSlice from './reducers/userDataSlice'

export default configureStore({
    reducer:{
        USER:userSlice,
        USER_DATA:userDataSlice
    }
})