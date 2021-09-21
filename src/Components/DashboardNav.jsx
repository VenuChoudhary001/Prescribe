import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/reducers/userAuth';
import Button from './Constants/Button';
import Navbar from './Navbar';
const DashboardNav = ({open,close}) => {
  const dispatch=useDispatch();
  const handleLogOut=()=>{
    dispatch(logout())
  }
    return (
      <>
        <main className="col-span-12 shadow-2xl sticky top-0 left-0 w-full bg-white flex justify-between items-center">
          <Navbar />
          <div className="nav-item  hidden md:flex justify-center items-center space-x-4 px-4">
            <NavLink to="/dashboard">
              <div className="text-gray-900 text-xl font-Poppins">
                Dashboard
              </div>
            </NavLink>
            <NavLink to="/prescription">
              <div className="text-gray-900 text-xl font-Poppins">
                Prescriptions
              </div>
            </NavLink>
            <div className="text-gray-900 text-xl font-Poppins">
              <Button
                action={handleLogOut}
                lable="Log out"
                styles="p-1 w-28 rounded-full bg-green-700 hover:bg-green-800 text-white text-lg font-Poppins font-extralight"
              />
            </div>
          </div>
          <div className="md:hidden px-2" onClick={()=>close(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current text-gray-400 hover:text-gray-500 cursor-pointer"
              viewBox="0 0 20 20"
             
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </main>
      </>
    );
}

export default DashboardNav;
