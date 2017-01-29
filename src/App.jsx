import React, { Component } from 'react';
import spriteLoader from './utilities/spriteLoader';

class App extends Component {
  componentDidMount() {
    spriteLoader.load('/img/sprite.svg');
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
