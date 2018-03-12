import React, { Component } from 'react';
import Counter from './counter.js'

class ControlPanel extends Component {
    render(){
        console.log('controlpanel render')
        return (
            <div>
                <Counter caption='First' />
                <Counter caption='Second' initValue={10} />
                <Counter caption='Third' initValue={20} />
                <button onClick={()=>this.forceUpdate()}>click me to re-render!</button>
            </div>
        );
    }
}
export default ControlPanel