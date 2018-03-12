import React, { Component } from 'react';
import Counter from './counter.js'
import Summary from './summary.js'

class ControlPanel extends Component {
    render(){
        return (
            <div>
                <Counter caption='First' />
                <Counter caption='Second' />
                <Counter caption='Third' />
                <Summary />
                <button onClick={()=>this.forceUpdate()}>click me to re-render!</button>

            </div>
        );
    }
}
export default ControlPanel