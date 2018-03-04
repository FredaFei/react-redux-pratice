import * as ActionTypes from './actionTypes.js'
import AppDispatcher from'./appDispatcher.js'

export const increment = (counterCaption)=>{
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
}

export const decrement = (counterCaption)=>{
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}