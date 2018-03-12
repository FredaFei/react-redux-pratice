import React, { Component } from 'react';
import Counter from './counter.js'

class ControlPanel extends Component {
    constructor(props){
        super(props)
        this.initValue = [0,10,20]
        const initSum = this.initValue.reduce((a,b)=>a+b,0)
        this.state={
            sum: initSum
        }

    }
    onCounterUpdate = (newValue,previousValue) =>{
        const valueChange = newValue - previousValue
        const newSum =  this.state.sum + valueChange
        this.setState({sum: newSum})
    }
    render(){
        console.log('controlpanel render')
        let {sum } = this.state
        let {initValue} = this
        return (
            <div>
                <Counter caption='First' initValue={initValue[0]} onUpdate={this.onCounterUpdate}/>
                <Counter caption='Second' initValue={initValue[1]} onUpdate={this.onCounterUpdate} />
                <Counter caption='Third' initValue={initValue[2]} onUpdate={this.onCounterUpdate} />
                <div>Total Count: {sum}</div>
                <button onClick={()=>this.forceUpdate()}>click me to re-render!</button>
            </div>
        );
    }
}
export default ControlPanel