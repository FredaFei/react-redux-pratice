import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CountDown extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            count: this.props.startCount
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextState.count !== this.state.count;
    }
    componentDidMount(){
        this.intervalHandel = setInterval(()=>{
            var newCount = this.state.count - 1
            if(newCount >=0 ){
                this.setState({
                    count: newCount
                })
            }else{
                window.clearInterval(this.intervalHandel)
                this.intervalHandel = null
            }
        },1000)
    }
    componentWillUnmount(){
        if(this.intervalHandel){
            window.clearInterval(this.intervalHandel)
            this.intervalHandel = null
        }
    }
    render(){
        return this.props.children(this.state.count)
    }
}

CountDown.propTypes = {
    children: PropTypes.func.isRequired,
    startCount: PropTypes.number.isRequired
}
export default CountDown;
