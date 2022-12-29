import React from 'react'
import { useGetUsersQuery } from '../../Redux/UserApi'
import List from '../templates/List/List';
import Button from '../UI/atoms/Button/Button';
import H1 from '../UI/atoms/H1/H1';
import P from '../UI/atoms/P/P';
import Body from '../UI/molecules/Body/Body';
import Header from '../UI/molecules/Header/Header';

const Users = () => {
    const { data, error, isLoading, isError, isSuccess } = useGetUsersQuery();
    console.log(data);
    return (
        <div>
            <List data={data} />
        </div>
    )
}

export default Users