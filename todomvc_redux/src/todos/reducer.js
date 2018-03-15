import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO,CLEAR_ALL,CHECK_ALL} from './actionTypes';

export default (state=[],action)=>{
    switch (action.type){
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    completed: action.completed,
                    text: action.text
                },
                ...state
            ]
        }
        case REMOVE_TODO: {
            return state.filter(item=> item.id !== action.id)
        }
        case TOGGLE_TODO: {
            return state.map(item=>{
                return item.id === action.id ? {...item, completed: !item.completed} : item
            })
        }
        case EDIT_TODO: {
            return state.map(item=>{
                return item.id === action.id ? {...item, text: action.text} : item
            })
        }
        case CLEAR_ALL: {
            return []
        }
        case CHECK_ALL: {
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))
        }
        default: {
            return state
        }
    }
}