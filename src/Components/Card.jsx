import React from 'react'

const Card = ({styles,content}) => {
    return (
        <div className={styles || 'overflow-hidden bg-gray-50 p-4 rounded-sm shadow-2xl mx-4 my-4 hover:bg-white max-w-xs'}>
          {content}
        </div>
    )
}

export default Card
