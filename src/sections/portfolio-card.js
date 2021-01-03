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
		this.image = props.image;
		this.year = props.year;
		this.description = props.description;
		this.credits = props.credits;
	}

	renderCredits()
	{
		const elements = [];

		for(const credit of this.credits)
		{
			elements.push(
				<CreditsSection
					skill={ credit }
				/>
			);
		}
		return elements;
	}

	render()
	{
		return (
			<Card bg="dark" className="portfoliocard">
				<Card.Header className="portfoliocard-header">
			 		{ this.title } ({ this.year })
				</Card.Header>
				<> { this.image != null &&
					<Card.Img src={ this.image } />
				} </>
				<Card.Body className="portfoliocard-content">
					<> { this.description != null &&
						<Card.Text>
							{ this.description }
						</Card.Text>
					} </>
				</Card.Body>
				<> { this.credits != null &&
					<Card.Footer>
						{ this.renderCredits() }
					</Card.Footer>
				} </>
			</Card>
		);
	}
}
