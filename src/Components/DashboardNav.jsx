import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from './Constants/Button';
import Navbar from './Navbar';
const DashboardNav = () => {
    return (
      <>
        <main className="col-span-12 bg-white flex justify-between items-center">
          <Navbar />
          <div className="nav-item flex justify-center items-center space-x-4 px-4">
            <NavLink to='/dashboard'>

            <div className="text-gray-900 text-xl font-Poppins">Dashboard</div>
            </NavLink>
            <NavLink to='/prescription'>

            <div className="text-gray-900 text-xl font-Poppins">
              Prescriptions
            </div>
            </NavLink>
            <div className="text-gray-900 text-xl font-Poppins">
              <Button
                lable="Log out"
                styles="p-1 w-28 rounded-full bg-green-700  text-white text-lg font-Poppins font-extralight"
              />
            </div>
          </div>
        </main>
      </>
    );
}

export default DashboardNav;
