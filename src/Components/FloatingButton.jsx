import React from 'react'

const FloatingButton = () => {
    return (
      <div className="p-3 z-50 fixed flex justify-center hover:bg-purple-800 cursor-pointer  hover: items-center bottom-10 right-10 bg-purple-700 w-16 h-16 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 stroke-current text-white hover"
          fill="none"
          viewBox="0 0 24 24"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    );
}

export default FloatingButton
