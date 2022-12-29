import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsersQuery } from '../../Redux/UserApi';

const UserDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading, isError, isSuccess } = useGetUsersQuery();
    console.log(data)
    const SingleUser = data?.find((el) => {
        return el.id == id;
    })
    console.log(SingleUser)
    return (
        <div>{SingleUser.username}</div>
    )
}

export default UserDetail