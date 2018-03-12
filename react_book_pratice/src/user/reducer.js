import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes'

export default ((state,action)=>{
    switch (action.type){
        case ADD_USER: {
            return [...state, action.user]
        }
        case DELETE_USER: {
            console.log(action)
            console.log([...state.slice(0,action.index),...state.slice(action.index+1)])
            return [...state.slice(0,action.index),...state.slice(action.index+1)]
        }
        case UPDATE_USER: {
            let newState = [...state]
            newState[action.index] = {...newState,...action.user}
            return newState
        }
        default: {
            return state
        }
    }
})