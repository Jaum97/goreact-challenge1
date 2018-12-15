import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header/index';
import Post from './components/Post/index';
import './styles.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h1>{this.state.counter}</h1>
        <Post />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
