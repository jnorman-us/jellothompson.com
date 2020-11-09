import React from 'react';

import '../styles/portfoliocard.css';

export default class PortfolioCard extends React.Component
{
	constructor(props)
	{
		super(props);

		// something about
		this.title = props.title;
		this.image = props.image; // name of the image
		this.description = props.description;
	}

	render()
	{
		return (
			<div className="portfoliocard">
				<img
				 	className="portfoliocard-banner"
					src={ `/portfolio/${ this.image }` }
					alt={ this.title }
				/>
				<div className="portfoliocard-contents">
					<div className="portfoliocard-contents-title">
						{ this.title }
					</div>
				</div>
			</div>
		);
	}
}
