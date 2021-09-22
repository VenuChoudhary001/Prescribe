import React from 'react'
import Fade from "react-reveal/Fade";

const Modal = ({title,content,open,close,showLoading}) => {
    
  if(!open){
    return <></>
  }
    return (
      <>
        <Fade top>
          <div className="absolute  max-w-screen-sm p-2 top-24 md:left-1/4 md:right-1/4 left-1 right-1 w-full  z-50">
            <div className=" p-4   max-h-screen   flex rounded-md shadow-2xl flex-col space-y-4 bg-white">
              <div className="text-2xl   w-full flex justify-between ">
                <div className="font-semibold  text-gray-800">{title}</div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 fill-current text-gray-900 cursor-pointer hover:text-red-600"
                    viewBox="0 0 20 20"
                    onClick={close}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <hr className="opacity-90" />
              <div className="font-Poppins">{content}</div>
            </div>
          </div>
        </Fade>
        <div
          onClick={close}
          className="fixed overlay z-10  bg-gray-400  opacity-50 top-0 left-0 w-screen h-screen"
        ></div>
      </>
    );
}

export default Modal
