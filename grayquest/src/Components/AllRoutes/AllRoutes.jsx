import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetail from '../pages/UserDetail'
import Users from '../pages/Users'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/:id' element={<UserDetail />}></Route>
        </Routes>
    )
}

export default AllRoutes