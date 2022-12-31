import React from 'react'
import H1 from '../../atoms/H1/H1'
import P from '../../atoms/P/P'
import Body from '../../molecules/Body/Body'
import Header from '../../molecules/Header/Header'

const UserDetailCard = ({ data }) => {
    return (
        <div className='user_detail_div_style'>
            <Header heading={"Personal Details"} />
            <hr />
            <Body title={"Username"} desc={data.username} />
            <Body title={"Name"} desc={data.name} />
            <Body title={"Email"} desc={data.email} />
            <Body title={"Phone"} desc={data.phone} />
            <Body title={"Website"} desc={data.website} />
        </div>
    )
}

export default UserDetailCard