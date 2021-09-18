import React from 'react'

const SideBar = () => {
    return (
      <>
        <div className=" flex items-center border-r-4  cursor-pointer hover:bg-gray-200 p-2 rounded-sm space-x-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 fill-current text-purple-400 w-8"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <div className="font-Poppins text-purple-600 text-lg">Home</div>
        </div>

        <div className=" flex items-center    cursor-pointer hover:bg-gray-200 p-2 rounded-sm space-x-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 stroke-current text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              //   stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <div className="font-Poppins text-purple-700 text-lg">Log Out</div>
        </div>
      </>
    );
}

export default SideBar
