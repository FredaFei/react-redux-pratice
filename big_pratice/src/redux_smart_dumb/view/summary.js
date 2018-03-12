import React, {Component} from 'react'
import PropTypes from 'prop-types'
import store from '../store.js'

function Summary(props) {
    return(
        <div>Total Count: {props.sum}</div>
    )
}

Summary.propTypes = {
    sum: PropTypes.number.isRequired
}

class SummaryContainer extends Component{
    constructor(props){
        super(props)
        this.state = this.getOwnState()
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
    onChange = ()=>{
        this.setState(this.getOwnState())
    }
    render(){
        return(
            <Summary sum={this.state.sum}/>
        )
    }
}
export default SummaryContainer