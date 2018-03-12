import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoApp from './todoApp.js';
import {Provider} from 'react-redux';
import store from './store.js'

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
