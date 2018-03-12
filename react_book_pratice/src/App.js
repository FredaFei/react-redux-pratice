import React, { Component } from 'react';
import './App.css';

import Input from './input'
import PercentageShower from './percent'

class PercentageApp extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            val: 0.00
        }
    }
    changeVal=(newValue)=>{
        this.setState({val: newValue})
    }
    render () {
        const {val} = this.state
        return (
            <div>
                <Input val={val} onChangeVal={this.changeVal}/>
                <PercentageShower val={val}/>
                PercentageApp: {val}
            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <PercentageApp />
            </div>
        );
    }
}

export default App;
