import React from 'react';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';

import PortfolioCardSection from './portfolio-card.js';

import '../styles/portfoliocard.css';

// import all pictures for the cards here
import mgghostscene from '../images/portfolio/100mg-ghost-scene.jpeg';
import goodmourning from '../images/portfolio/good-mourning.webp';
import sixpack from '../images/portfolio/sixpack.png';
import usb from '../images/portfolio/usb.jpg';
import chicagofilmmakers from '../images/portfolio/chicagofilmmakers.png';
import unitedairlines from '../images/portfolio/unitedairlines.png';
import whoztheboss from '../images/portfolio/whoztheboss.png';

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

	renderCard(title, image, year, description, credits)
	{
		return (
			<PortfolioCardSection
				title={ title }
				image={ image }
				year={ year }
				description={ description }
				credits={ credits }
			/>
		);
	}

	render()
	{
		return (
			<div className="page-content">
				<div className="portfolio-header">
					Videography
				</div>
				<CardColumns>
					{ this.renderCard("100mg", mgghostscene, 2018, "100mg (Short Film) is a story of a young woman's struggle with sleep deprivation causes her to question reality. This film was made within Columbia College Chicago's Cinema Art and Science Program. In this project, I put my very amateur VFX/Compositing skills to create a \"Ghost\". I had never done this before so it was a huge learning experience for me. A majority of knowledge of compositing and general After Effects work came from me experimenting. The result, after many passes of color correction and additional effects, is a product I am happy to champion as my own. Months later, when I was going through the projects I worked on the past year, I came across my \"Ghost\" scene and sought to create a VFX Breakdown of it. Going back through my files, I realized the improvements and streamlined process I could have done originally that would have helped initially when the project was due.", [ "VFX" ]) }
					{ this.renderCard("USB", usb, 2018, "The requirements for this project was to create a film that was centered around 2 characters that have a conflict. The challenge was to create the film without using any spoken dialogue.", [ "Editor", "Colorist", "Motion Graphics", "Re-recording Mixer" ]) }
					{ this.renderCard("Good Mourning", goodmourning, 2019, "Good Mourning is a visual poem about how people differ in coping with their life after a breakup. This short explores the parallel and polar behaviors that are apart of a bigger metaphor about how each day not only brings new challenges but reminders of the yesterday.", [ "Editor", "Colorist", "Motion Graphics", "Sound Editor", "Re-recording Mixer" ]) }
					{ this.renderCard("Six Pack", sixpack, 2020, "Six Pack is a short film about the strength of a strong sisterhood bond.", [ "Editor", "Colorist", "Motion Graphics" ]) }
					{ this.renderCard("Riverwalk", null, 2020, null, [ "Editor", "Colorist", "Motion Graphics", "Re-recording Mixer" ]) }
					{ this.renderCard("35", null, 2020, null, [ "Sound Editor" ]) }
					{ this.renderCard("Dead Man's Hand", null, 2020, null, [ "Sound Editor" ]) }
					{ this.renderCard("Karen", null, 2020, null, [ "Sound Editor" ]) }
					{ this.renderCard("Jesse James", null, 2020, null, [ "Dialogue Editor" ]) }
					{ this.renderCard("Penis Papers", null, 2020, null, [ "Dialogue Editor" ]) }
					{ this.renderCard("Hellwave", null, 2020, null, [ "Colorist", "VFX", "Motion Graphics" ]) }
					{ this.renderCard("Collab: United Airlines", unitedairlines, 2020, "Internal marketing video campaign", null) }
					{ this.renderCard("Collab: Who'z the Boss Music Library", whoztheboss, 2020, "TV & Internet Spots, Album cover design", null) }
					{ this.renderCard("Collab: Chicago Filmmakers", chicagofilmmakers, 2020, "Promos for summer workshops, 38th Reeling Film Festival ", null) }
				</CardColumns>
			</div>
		);
	}
}
