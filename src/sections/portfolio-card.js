import React from 'react';

import CreditsSection from './credits.js';

import '../styles/portfoliocard.css';

export default class PortfolioCard extends React.Component
{
	constructor(props)
	{
		super(props);

		// something about
		this.title = props.title;
		this.year = props.year;
		this.credits = props.credits;
	}

	renderCredits()
	{
		const elements = [];

		var i = 0;
		for(const credit of this.credits)
		{
			var last = i + 1 === this.credits.length;
			elements.push(
				<CreditsSection
					last={ last }
					skill={ credit }
				/>
			);
			i ++;
		}
		return elements;
	}

	render()
	{
		return (
			<div className="portfoliocard">
				<div className="portfoliocard-header">
					{ this.title } ({ this.year })
				</div>
				<div className="portfoliocard-content">
					{ this.renderCredits() }
				</div>
			</div>
		);
	}
}
