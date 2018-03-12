import AppDispatcher from '../appDispatcher.js'
import * as ActionTypes from '../actionTypes.js'
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed'

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
}

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues: function () {
        return counterValues
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeChangeListener(CHANGE_EVENT,callback)
    }
});

CounterStore._dispatchToken = AppDispatcher.register(action=>{
    console.log(action)
    if(action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    }else if(action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        CounterStore.emitChange()
    }
});

export default CounterStore

