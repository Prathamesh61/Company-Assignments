import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
        async ({ url, method, data, params }) => {
            try {
                const result = await axios({ url: baseUrl + url, method, data, params })
                return { data: result.data }
            } catch (axiosError) {
                let err = axiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }

const UserApi = createApi({
    reducerPath: "UsersData",
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (build) => {
        return {
            getUsers: build.query({
                query: () => ({
                    url: '/users',
                    method: 'get'
                })
            }),
            getSingleUser: build.query({
                query: (id) => ({
                    url: `/users/${id}`,
                    method: 'get'
                })
            })
        }
    },
})
export default UserApi;
export const { useGetUsersQuery, useGetSingleUserQuery } = UserApi;