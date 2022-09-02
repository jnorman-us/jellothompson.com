import React from 'react';

import '../styles/portfoliocard.css';

export default class CollabCard extends React.Component
{
	constructor(props)
	{
		super(props);

		this.title = props.title;
		this.image = props.image;
		this.description = props.description;
	}

	render()
	{
		return (
			<div className="portfoliocard">
				<div className="portfoliocard-image" style={{
					backgroundImage: `url(${ this.image })`,
				}} />
				<div className="collabcard-content">
					{ this.description }
				</div>
			</div>
		);
	}
}
