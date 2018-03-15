import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO,EDIT_TODO,CLEAR_ALL,CHECK_ALL} from './actionTypes';

let baseId = 10
export const addTodo = (text)=>{
    return {
    type: ADD_TODO,
    id: ++baseId,
    completed: false,
    text
}}
export const toggleTodo = (id)=>({
    type: TOGGLE_TODO,
    id
})
export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id
})
export const editTodo = ({id,text})=>({
    type: EDIT_TODO,
    id,
    text
})
export const clearAllTodo = ()=>({
    type: CLEAR_ALL
})
export const checkAllTodo = ()=>({
    type: CHECK_ALL
})
