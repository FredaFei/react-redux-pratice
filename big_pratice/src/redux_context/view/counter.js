import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../action.js';


function Counter(props){
    const {caption, onIncrement,onDecrement,value} = props
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

class CounterContainer extends Component {
    constructor() {
        super(...arguments)
        this.state = this.getOwnState()
    }
    getOwnState =()=>{
        return {
            value: this.context.store.getState()[this.props.caption]
        };
    }
    onIncrement = ()=>{
        this.context.store.dispatch(Actions.increment(this.props.caption))
    }
    onDecrement = ()=>{
        this.context.store.dispatch(Actions.decrement(this.props.caption))
    }
    onChange = ()=>{
        this.setState(this.getOwnState());
    }
    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption !== this.props.caption || nextState.value !== this.state.value)
    }
    componentDidMount(){
        this.context.store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        this.context.store.unsubscribe(this.onChange)
    }

    render() {
        return (
            <Counter caption={this.props.caption}
                     onIncrement={this.onIncrement}
                     onDecrement={this.onDecrement}
                     value={this.state.value}/>
        )
    }
}

CounterContainer.propTypes = {
    caption: PropTypes.string.isRequired
}
CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer

// constructor
// getInitialState
// getDefaultProps
// componentWillMount
// render
// componentDidMount