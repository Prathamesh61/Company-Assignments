import React from 'react'
import { useGetUsersQuery } from '../../Redux/UserApi'
import List from '../templates/List';
import Body from '../UI/molecules/Body/Body';

const Users = () => {
    const { data, isLoading, isError, isSuccess } = useGetUsersQuery();
    console.log(data);
    return (
        <div>
            {
                isLoading && (<h1>Loading...</h1>)
            }
            {
                isError && (<h1>Error...</h1>)
            }
            {
                isSuccess && (<List data={data} />)
            }
        </div>
    )
}

export default Users