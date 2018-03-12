import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './actionTypes.js'
import * as status from './status.js';

export default (state={status: status.LOADING},action)=>{
    switch (action.type){
        case FETCH_START: {
            return {status: status.LOADING}
        }
        case FETCH_SUCCESS: {
            return { ...state, status: status.SUCCESS, ...action.result}
        }
        case FETCH_FAIL: {
            return {status: status.FAIL}
        }
        default: {
            return state
        }
    }
}