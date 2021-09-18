import React from 'react'

const TextBox = ({placeholder,type,action,err}) => {
    return (
        <div className='w-full flex flex-col'>
            <input type={type || "text"} {...action} className='outline-none border-b-2 focus:border-gray-600 w-full text-gray-600 bg-gray-100 p-2 ' placeholder={placeholder}/>
            {err && <div className='text-red-500 text-xs'>{err}</div> }
        </div>
    )
}

export default TextBox
