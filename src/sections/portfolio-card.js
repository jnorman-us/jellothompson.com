import React from 'react';
import { Card, } from 'react-bootstrap';

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

		var first = true;
		for(const credit of this.credits)
		{
			elements.push(
				<CreditsSection
					first={ first }
					skill={ credit }
				/>
			);
			if(first == true)
			{
				first = false;
			}
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
