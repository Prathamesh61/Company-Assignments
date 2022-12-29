import React from 'react'
import P from '../../atoms/P/P'
import "./BodyStyle.sass"
const Body = ({ topic, desc }) => {
    return (
        <div className='body_div_style'>
            <P content={topic} />
            <P content={desc} />
        </div>
    )
}

export default Body