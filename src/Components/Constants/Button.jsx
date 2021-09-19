import React from 'react'

const Button = ({lable,styles,action}) => {
    return (
        <div>
            <button onClick={action} className={styles}>{lable}</button>
        </div>
    )
}

export default Button
