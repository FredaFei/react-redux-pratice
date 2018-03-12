import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            iptVal: 0
        }
    }
    changeHandle=(e)=>{
        const newValue = e.target.value
        const previousValue = this.state.iptVal
        this.props.onChangeVal(newValue,previousValue)
        this.setState({
            iptVal: newValue
        })
    }
    render () {
        return (
            <div>
                <input type='number' value={this.state.iptVal} onChange={this.changeHandle}/>
            </div>
        )
    }
}

export default Input
