import React from 'react'
import H4 from '../../atoms/H4/H4'
import P from '../../atoms/P/P'
import "./BodyStyle.sass"
const Body = ({ title, desc }) => {
    return (
        <div className='body_div_style'>
            <H4 content={title} />
            <P content={desc} />
        </div>
    )
}

export default Body