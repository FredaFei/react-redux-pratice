import React, { Component } from 'react';

import { view as FilterView } from './filter/'
import { view as TodosView } from './todos/'

class App extends Component {
  render() {
    return (
      <div className="todomvc">
          <TodosView />
          <FilterView />
      </div>
    );
  }
}

export default App;
