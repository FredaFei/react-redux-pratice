import React, {Component} from 'react'
import store from '../store.js'

class Summary extends Component{
    constructor(props){
        super(props)
        this.state = this.getOwnState()
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){
        store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        store.subscribe(this.onChange)
    }
    getOwnState(){
        const state = store.getState()
        let sum = 0;
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum += state[key];
            }
        }
        return {sum: sum}
    }
    onChange(){
        this.setState(this.getOwnState())
    }
    render(){
        return(
            <div>Total Count: {this.state.sum}</div>
        )
    }
}
export default Summary