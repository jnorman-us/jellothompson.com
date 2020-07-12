import React from 'react';

import Menu from '../menu.js';

import '../styles/welcome.css';

import highlight_video from '../images/suppa_compressed.mp4';

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
				<div className="welcome-menu">
					<Menu
						white={ true }
					/>
				</div>
				<div className="welcome-title">
					WHAT'S UPPPP
				</div>
			</div>
		);
	}
}
