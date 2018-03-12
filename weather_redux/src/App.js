import React, {Component} from 'react';

import {view as Weather} from './weather';
import {view as CitySelector} from './city_selector/'

class App extends Component {
    render() {
        return (
            <div className="App">
                <CitySelector />
                <Weather />
            </div>
        );
    }
}

export default App;
