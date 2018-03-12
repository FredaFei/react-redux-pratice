import * as Status from './status';
import {FETCH_STARTED,FEATCH_SUCCESS,FEATCH_FAILURE} from "./actionTypes";

export default (state = {status: Status.LOADING},action)=>{
    switch (action.type){
        case FETCH_STARTED:{
            return {status: Status.LOADING}
        }
        case FEATCH_SUCCESS:{
            return {...state,status: Status.SUCCESS, ...action.result}
        }
        case FEATCH_FAILURE:{
            return {status: Status.FAILURE}
        }
        default:{
            return {status: state}
        }

    }
}
