import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../store.js'
import * as Actions from '../action.js';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = this.getOwnState()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextProps.value !== this.state.value)
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.subscribe(this.onChange)
    }
    getOwnState = ()=>{
        return {
            value: store.getState()[this.props.caption]
        }
    }
    onChange = () => {
        this.setState(this.getOwnState())
    }
    onIncrementBtn = () => {
        store.dispatch(Actions.increment(this.props.caption))
    }
    onDecrementBtn = () => {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    render() {
        const {value} = this.state
        const {caption} = this.props
        return (
            <div>
                <button onClick={this.onIncrementBtn}>+</button>
                <button onClick={this.onDecrementBtn}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}
export default Counter

// constructor
// getInitialState
// getDefaultProps
// componentWillMount
// render
// componentDidMount