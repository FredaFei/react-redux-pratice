import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes'

export const addUser = (user)=>{
    console.log(user)
    return ({
        type: ADD_USER,
        user
    })
}

export const deleteUser = (index)=>({
    type: DELETE_USER,
    index: index
})

export const updateUser = (index,user)=>({
    type: UPDATE_USER,
    index: index,
    user
})