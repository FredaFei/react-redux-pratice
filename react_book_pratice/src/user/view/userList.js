import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {deleteUser, updateUser} from '../action'


import User from './userItem'

const UserList = ({users, onRemoveUser, onUpdateUser})=>{

    return(
        <ul className="userlist">
        {
            users.map((item,index)=>(
                <User key={index}
                      name={item.name}
                      age={item.age}
                      gender={item.gender}
                      onRemove={()=> onRemoveUser(index)}
                />
            ))
        }
        </ul>
    )
}
UserList.propTypes = {
    users: PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    return {
        users: state
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onRemoveUser: (index)=>{
            dispatch(deleteUser(index))
        },
        onUpdateUser: (index,user)=>{
            dispatch(updateUser(index,user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
