import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import Body from '../../molecules/Body/Body'
import Header from '../../molecules/Header/Header'
import "./UserCardStyle.sass"
const UserCard = ({ username, email, name, id }) => {
    return (
        <div className='user_card_div'>
            <Header heading={username} />
            <Body topic={"Name"} desc={name} />
            <Body topic={"Email"} desc={email} />
            <Link to={`${id}`}><Button content={"Click hear to view"} /></Link>
        </div>
    )
}

export default UserCard