import React from 'react'
import H3 from '../../atoms/H3/H3'
import "./HeaderStyle.sass"
const Header = ({ heading }) => {
    return (
        <div className='header_div_style'><H3 content={heading} /></div>
    )
}

export default Header