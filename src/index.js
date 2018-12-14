import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header/index';

class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
