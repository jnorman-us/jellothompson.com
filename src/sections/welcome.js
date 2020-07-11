import React from 'react';

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
				<video className="welcome-video" autoPlay loop>
					<source src={ highlight_video } type="video/mp4" />
				</video>
			</div>
		);
	}
}
