import React from 'react'
import {NavLink} from 'react-router-dom'
import Fade from "react-reveal/Fade";

const MobileNav = ({open,close}) => {
    if(!open){
        return <></>
    }
    return (
      <section className="flex fixed overflow-hidden top-0 left-0 bg-white z-70 fixed w-full h-full flex-col space-y-4 p-3">
        <main className="p-1 w-full" onClick={() => close(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 fill-current text-gray-800"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </main>
        <Fade right cascade>
        <main className="flex flex-col justify-center items-center space-y-4">
          <NavLink to="/dashboard">
            <div className="text-gray-900  text-3xl focus:bg-gray-100 font-Poppins" onClick={()=>close(false)}>
              Dashboard
            </div>
          </NavLink>
          <NavLink to="/prescription">
            <div className="text-gray-900  text-3xl font-Poppins" onClick={()=>close(false)}>
              Prescriptions
            </div>
          </NavLink>
        </main>
        </Fade>
      </section>
    );
}

export default MobileNav
