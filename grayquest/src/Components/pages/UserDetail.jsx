import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleUserQuery } from '../../Redux/UserApi';
import SingleCard from '../templates/SingleCard';
import H1 from '../UI/atoms/H1/H1';

const UserDetail = () => {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useGetSingleUserQuery(id);
    console.log(data)
    return (
        <div className='user_details_div'>
            {
                isLoading && (<h1>Loading...</h1>)
            }
            {
                isError && (<h1>Error...</h1>)
            }
            {
                isSuccess && (<SingleCard data={data} />)
            }

        </div>
    )
}

export default UserDetail