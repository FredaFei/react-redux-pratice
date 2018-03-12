import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        console.log('constructor: ' + props.caption)
        super(props)
        this.state = {
            count: props.initValue
        }
    }
    onClickIncrementBtn = ()=>{
        this.setState({count: this.state.count + 1})
    }
    onClickDecrementBtn = ()=>{
        this.setState({count: this.state.count - 1})
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: '+ this.props.caption)
    }
    componentWillMount(){
        console.log('componentWillMount: '+ this.props.caption)
    }
    componentDidMount(){
        console.log('componentDidMount: '+ this.props.caption)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        return (nextProps.caption !== this.props.caption) || (nextProps.count !== this.state.count)
    }
    render(){
        console.log('render: ' + this.props.caption)

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
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
}
Counter.defaultProps = {
    initValue: 0
}
export default Counter

// constructor
// getInitialState
// getDefaultProps
// componentWillMount
// render
// componentDidMount