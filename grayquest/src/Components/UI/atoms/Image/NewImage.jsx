import React from 'react'
import "./NewImageStyle.sass"
const NewImage = () => {
    let random = Math.random() * 70;
    let url = `https://i.pravatar.cc/150?img=${Math.floor(random)}`
    return (
        <img className='image_style' src={url} alt={"img"} />
    )
}

export default NewImage