import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
const PrivateRoute = ({children,...rest}) => {
    const data=useSelector(state=>state.USER)
    return (
      <Route
      {...rest}
       render={()=>data.token ? children :<Redirect to='/' />}
      />
    )
}

export default PrivateRoute
