import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="site-header">
        <div className="site-header__brand">
          <svg><use xlinkHref="#logo"/></svg>
          <h1>Gauntlet</h1>
        </div>
				<button className="site-header__nav-toggle">
					Menu
				</button>
			</header>
		)
	}
}

export default Header;
