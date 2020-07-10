import React from 'react';
import Youtube from 'react-youtube';

import '../styles/welcome.css';

export default class WelcomeSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.video_id = 'ZZ5LpwO-An4';
	}

	render()
	{
		return (
			<div className="welcome">
				<Youtube
					videoId={ this.video_id }
					opts={{
						width: '100%',
						height: '100%',
						playerVars: {
							autoplay: 1,
							rel: 0,
							controls: 0,
							showinfo: 0,
							loop: 1,
							disablekb: 1,
							mute: 1,
							ps: 'docs',
						}
					}}
				/>
			</div>
		);
	}
}
