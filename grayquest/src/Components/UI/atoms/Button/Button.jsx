import React from 'react'
import "./ButtonStyle.sass"
const Button = ({ content }) => {
    return (
        <button className='button_style'>{content}</button>
    )
}

export default Button