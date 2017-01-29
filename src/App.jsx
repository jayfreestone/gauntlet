import React, { Component } from 'react';
import Header from './components/Header';
import spriteLoader from './utilities/spriteLoader';

class App extends Component {
  componentDidMount() {
    spriteLoader.load('/img/sprite.svg');
  }
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
