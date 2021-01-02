import React from 'react';
import { Card, } from 'react-bootstrap';

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
		this.credits = props.credits;
	}

	render()
	{
		return (
			<Card bg="dark">
				<Card.Header className="portfoliocard-header">
			 		{ this.title }
				</Card.Header>
				<Card.Body className="portfoliocard-content">
					<Card.Text>
						{ this.description }
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}
