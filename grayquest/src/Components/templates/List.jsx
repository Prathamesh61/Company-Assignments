import React from 'react'
import H1 from '../UI/atoms/H1/H1.jsx'
import Header from '../UI/molecules/Header/Header.jsx'
import UserCard from '../UI/organisms/UserCard/UserCard.jsx'
import "../style/ListStyle.sass"
import NewImage from '../UI/atoms/Image/NewImage.jsx'
const List = ({ data }) => {
    return (
        <div className='list_style'>
            <H1 content={"User List"} />
            <div className='grid_style'>
                {data && data.map((el) => {
                    return <UserCard key={el.id} username={el.username} id={el.id} name={el.name} email={el.email} />
                })}
            </div>
            <br />
        </div>
    )
}

export default List