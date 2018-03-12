import {createStore} from 'redux'
import reducer from './reducer';

const userList = [
    {name: 'Bob',age: 10,gender: 'male'},
    {name: 'An',age: 8,gender: 'female'},
    {name: 'Herry',age: 9,gender: 'male'}
]

const store = createStore(reducer,userList)
export default store