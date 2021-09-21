import React from 'react'

const DropDown = ({lable,options,action}) => {
    return (
        <div className='flex flex-col space-y-2'>
             <div className="text-gray-800 font-normal">{lable}</div>
            <select className='bg-transparent outline-none focus:border-gray-500 border-b-2' name={lable} onClick={action}>
               
             {options.map(item=><option className="bg-gray-200 hover:bg-gray-600" value={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown
