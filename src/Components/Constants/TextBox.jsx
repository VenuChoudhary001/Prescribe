import React from 'react'

const TextBox = ({placeholder,type,action,err,label}) => {
    return (
        <div className='w-full flex flex-col'>
           {label && <div className="text-gray-900 font-normal text-md">{label}</div>}
            <input  type={type || "text"} {...action} className='outline-none border-b-2 focus:border-gray-600 w-full text-gray-600 bg-gray-100 p-2 ' placeholder={placeholder}/>
            {err && <div className='text-red-500 text-xs'>{err}</div> }
        </div>
    )
}

export default TextBox
