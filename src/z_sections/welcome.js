import React from 'react';

import Menu from '../menu.js';

import '../styles/welcome.css';

import highlight_video from '../images/720HD.mp4';

export default class WelcomeSection extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div className="welcome">
				<video className="welcome-video" autoPlay muted loop src={ highlight_video } />
				<div className="welcome-title">
					Jello Thompson Visuals
				</div>
				<div className="welcome-menu">
					<Menu
						white={ true }
					/>
				</div>
			</div>
		);
	}
}
