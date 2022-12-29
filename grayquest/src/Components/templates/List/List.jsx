import React from 'react'
import H1 from '../../UI/atoms/H1/H1.jsx'
import Header from '../../UI/molecules/Header/Header.jsx'
import UserCard from '../../UI/organisms/UserCard/UserCard.jsx'
import "./ListStyle.sass"
const List = ({ data }) => {
    return (
        <div className='list_style'>
            <H1 content={"User List"} />
            {data && data.map((el) => {
                return <UserCard username={el.username} id={el.id} name={el.name} email={el.email} />
            })}
        </div>
    )
}

export default List