import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../action.js'
import CounterStore from '../stores/counterStore.js'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextProps.count !== this.state.count)
    }
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }
    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }
    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount})
    }
    onClickIncrementBtn = () => {
        Actions.increment(this.props.caption)
    }
    onClickDecrementBtn = () => {
        Actions.decrement(this.props.caption)
    }

    render() {
        let {caption} = this.props
        return (
            <div>
                <button onClick={this.onClickIncrementBtn}>+</button>
                <button onClick={this.onClickDecrementBtn}>-</button>
                <span>{caption} count: {this.state.count}</span>
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