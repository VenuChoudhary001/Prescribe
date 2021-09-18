import React from 'react'

const Button = ({type,lable,styles,action}) => {
    return (
        <div>
            <button onClick={action} className={styles || `text-white w-48 rounded-full p-2 font-Poppins text-2xl bg-${type}-500 hover:bg-${type}-600`}>{lable}</button>
        </div>
    )
}

export default Button
