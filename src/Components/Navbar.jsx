import React from 'react'
import Logo from '../Assets/cardiogram.png'
const Navbar = () => {
    return (
      <div className="p-3 flex justify-center items-center text-brand bg-transparent text-4xl font-extrabold font-Poppins">
        Pres 
        <pre>
          <img src={Logo} alt="" className="logo mx-1" />
        </pre>{" "}
         cribe
      </div>
    );
}

export default Navbar
