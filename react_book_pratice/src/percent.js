import React, { Component } from 'react';

class PercentageShower extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            percentVal: this.props.val
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(`componentWillReceiveProps`)
        this.setState({
            percentVal: nextProps.val
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(`shouldComponentUpdate`)
        return nextProps.val !== this.props.val || nextState.val !== this.state.val
    }
    componentWillUpdate(){
        console.log(`componentWillUpdate`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate`)
        console.log(`--end--`)
    }
    render () {
        const percent = (this.state.percentVal*100).toFixed(2)
        return (
            <div>{percent}%</div>
        )
    }
}
export default PercentageShower