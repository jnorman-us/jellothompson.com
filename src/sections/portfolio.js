import React from 'react';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';

import PortfolioCardSection from './portfolio-card.js';

import '../styles/portfoliocard.css';

// import all pictures for the cards here
import mgghostscene from '../images/portfolio/100mg-ghost-scene.jpeg';
import adobexterminator from '../images/portfolio/adobe-x-terminator-dark-fate-trailer-remix.jpg';
import goodmourning from '../images/portfolio/good-mourning.webp';

export default class PortfolioSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: props.mobile,
			category: props.category, // 0: all, 1: photos, 2: videos, 3:
		};
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	renderCard(title, image, description, credits)
	{
		return (
			<PortfolioCardSection
				title={ title }
				image={ image }
				description={ description }
				credits={ credits }
			/>
		);
	}

	render()
	{
		return (
			<div className="page-content">
				<CardColumns>
					{ this.renderCard(
						"100mg Ghost Scene",
						mgghostscene,
						"A short about a sleeping lady",
						[ "VFX" ],
					) }
					{ this.renderCard(
						"Adobe X Terminator Dark Fate Trailer Remix",
						adobexterminator,
						"Remix of the Terminator Dark Fate trailer",
						[ "Editor" ],
					) }
					{ this.renderCard(
						"Good Mourning",
						goodmourning,
						"A short reflecting on an ended relationship",
						[ "Editor", "Colorist", "Mixer"],
					) }
				</CardColumns>
			</div>
		);
	}
}
