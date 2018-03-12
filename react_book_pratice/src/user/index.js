import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css'

import UserApp from './view';
import store from './store.js'

ReactDOM.render(
    <Provider store={store}>
        <UserApp />
    </Provider>,
    document.getElementById('root')
);