import React, {Component} from 'react';
import './App.css';

// import ShoppingList from './shoppingList.js'
// import TestRouter from './testrouter.js'
// import Author from './react-routes/redirect.js'
import ControlPanel from './redux_basic/view/controlPanel.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 12
        }
    }

    render() {
        return (
            <div className="App">

                <ControlPanel />

                {/*<Author></Author>*/}
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<ShoppingList age={this.state.age}></ShoppingList>*/}
                {/*<div className="router-box">*/}
                    {/*<TestRouter></TestRouter>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default App;
