import * as ActionTypes from './actionTypes.js'

let nextTodoId = 0
export const addTodo = (text)=>({
    type: ActionTypes.ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text: text
})

export const toggleTodo = (id)=>({
    type: ActionTypes.TOGGLE_TODO,
    id: id
})
export const removeTodo = (id)=>({
    type: ActionTypes.REMOVE_TODO,
    id: id
})