import React from 'react'

const Button = ({ text }) => {
    return (
        <div>
            <button className='text-white px-5 py-2 rounded-sm cursor-pointer text-sm hover:bg-primary transition-colors duration-300 ease-out'>{text}</button>
        </div>
    )
}

export default Button