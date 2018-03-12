import React from 'react'
import UserList from './userList'
import AddUser from './addUser'

export default ()=>{
    return (
        <div className="user-container">
            <AddUser />
            <UserList />
        </div>
    )
}
