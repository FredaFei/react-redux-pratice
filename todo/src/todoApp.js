import React from 'react';
import { view as Todos } from './todos/index.js'
import { view as Filter } from './filter/index.js'

function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    )
}

export default TodoApp;
