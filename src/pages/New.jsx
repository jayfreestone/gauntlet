import React, { Component } from 'react';

class New extends Component {
  constructor() {
    super();
    this.state = {
      threadUrl: '',
    };
    this.startSession = this.startSession.bind(this);
    this.threadUrlUpdate = this.threadUrlUpdate.bind(this);
  }
  startSession(e) {
    e.preventDefault();
    const details = this.getDetails(this.state.threadUrl);
    this.props.router.push(`/session/${details.board}/${details.id}`);
  }
  getDetails(url) {
    const split = url.replace('http://', '').split('/');

    return {
      board: split[1],
      id: split[3],
    };
  }
  threadUrlUpdate(e) {
    this.setState({ threadUrl: e.target.value });
  }
  render() {
    return (
      <div>
        Enter the URL:
        <form onSubmit={this.startSession}>
          <input type="text" value={this.state.threadUrl} onChange={this.threadUrlUpdate} />
          <button type="submit">Play</button>
        </form>
      </div>
    );
  }
}

export default New;
