import React from 'react';
import { SocialIcon } from 'react-social-icons';

import '../styles/social.css';

export default class SocialSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.url_linkedin = "https://www.linkedin.com/in/jello-thompson-9b122a188/";
		this.url_instagram = "https://www.instagram.com/jumbojello";
		this.url_youtube = "https://www.youtube.com/channel/UCgD8IZh42DT8D6mOHv9WSiQ";
	}

	render()
	{
		return (
			<div className="social">
				<SocialIcon className="social-icon" target="_blank" url={ this.url_linkedin } />
				<SocialIcon className="social-icon" target="_blank" url={ this.url_instagram } />
				<SocialIcon className="social-icon" target="_blank" url={ this.url_youtube } />
			</div>
		);
	}
}
