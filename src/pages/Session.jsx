import React, { Component } from 'react';

class Session extends Component {
	componentDidMount() {
		const params = this.props.router.params;

		this.fetchThread({
			board: params.board,
			id: params.id,
		});
	}
	fetchThread(details) {
		const request = new Request(`http://a.4cdn.org/${details.board}/thread/${details.id}.json`, {
			headers: new Headers({
				'Origin': 'http://boards.4chan.org'
			}),
		});

		fetch(request);
	}
  render() {
    return (
      <div>
				Nice session...
      </div>
    );
  }
}

export default Session;
