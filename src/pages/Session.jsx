import React, { Component } from 'react';
import _ from 'lodash/fp';

class Session extends Component {
	constructor() {
		super();

		this.state = {
			board: '',
			id: '',
			posts: [],
		};
	}
	componentDidMount() {
		const params = this.props.router.params;

		this.setState({
			board: params.board,
			id: params.id,
		}, () => {
			this.fetchThread();
		});
	}
	fetchThread(details = this.state) {
		const request = new Request('http://api.gauntlet.dev/proxy.php', {
			method: 'GET',
			headers: new Headers({
				'X-Proxy-URL': `http://a.4cdn.org/${details.board}/thread/${details.id}.json`,
				'Content-Type': 'application/json',
			}),
		});

		const hasFile = _.filter((p) => p.filename);
		const hasValidComment = _.filter((p) => /\+?\d+( |,| )+[a-z]+( |,| )+[a-z]+/.test(p.com));

		fetch(request)
			.then(resp => resp.json())
			.then((data) => {
				const validPosts = _.compose(hasValidComment, hasFile);
				this.setState({ posts: validPosts(data.posts) });
		});
	}
  render() {
    return (
      <ul>
				{this.state.posts.map((post) => (
					<li key={post.no}>
						<img src={`http://is2.4chan.org/${this.state.board}/${post.tim}${post.ext}`} alt=""/>
					</li>
				))}
      </ul>
    );
  }
}

export default Session;
