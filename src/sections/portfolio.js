import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioCardSection from './portfolio-card.js';
import CollabCardSection from './collab-card.js';

import '../styles/portfoliocard.css';

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

		this.filmography = [{
			title: "100mg",
			year: 2018,
			credits: [ "VFX" ],
		}, {
			title: "USB",
			year: 2018,
			credits: [ "Editor", "Colorist", "Motion Graphics", "Re-recording Mixer" ],
		}, {
			title: "Good Mourning",
			year: 2019,
			credits: [ "Editor", "Colorist", "Motion Graphics", "Sound Editor", "Re-recording Mixer" ],
		}, {
			title: "Six Pack",
			year: 2020,
			credits: [ "Editor", "Colorist", "Motion Graphics" ],
		}, {
			title: "Riverwalk",
			year: 2020,
			credits: [ "Editor", "Colorist", "Motion Graphics", "Re-recording Mixer" ],
		}, {
			title: "35",
			year: 2020,
			credits: [ "Sound Editor" ],
		}, {
			title: "Dead Man's Hand",
			year: 2020,
			credits: [ "Sound Editor" ],
		}, {
			title: "Karen",
			year: 2020,
			credits: [ "Sound Editor" ],
		}, {
			title: "Jesse James",
			year: 2020,
			credits: [ "Dialogue Editor" ],
		}, {
			title: "Penis Papers",
			year: 2020,
			credits: [ "Dialogue Editor" ],
		}, {
			title: "Hellwave",
			year: 2020,
			credits: [ "Colorist", "VFX", "Motion Graphics" ],
		}, {
            title: "The Christmas Pitch - Feature",
            year: 2021,
            credits: [ "Asst. Editor" ],
        }, {
            title: "Making Beethoven Proud - Short Film",
            year: 2021,
            credits: [ "Supervising Sound Editor", "Re-recording Mixer" ],
        }, {
            title: "Wake & Bake - TV Series",
            year: 2021,
            credits: [ "Editorial Department" ],
        }, {
            title: "Augury - Short Film",
            year: 2021,
            credits: [ "Editor", "VFX Supervisor", "Post-Production Supervisor" ],
        }, {
            title: "Sinking - Short Film",
            year: 2021,
            credits: [ "Asst. Editor", "VFX Supervisor", "Post-Production Supervisor" ],
        }, {
            title: "Bliss - Short Film",
            year: 2021,
            credits: [ "VFX Supervisor", "Post-Production Supervisor" ],
        }];

		this.collabs = [{
			title: "Chicago Film Makers",
			image: chicagofilmmakers,
			description: "Promos for summer workshops, 38th Reeling Film Festival",
		}, {
			title: "United Airlines",
			image: unitedairlines,
			description: "Internal marketing video campaign",
		}, {
			title: "Who'z the Boss Music Library",
			image: whoztheboss,
			description: "TV & Internet Spots, Album cover design",
		}];

		this.filmography.reverse();
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	renderFilmography()
	{
		const elements = [];

		for(const film of this.filmography)
		{
			elements.push(
				<Col xl="4" md="6" sm="12">
					<PortfolioCardSection
						title={ film.title }
						year={ film.year }
						credits={ film.credits }
					/>
				</Col>
			);
		}
		return elements;
	}

	renderCollabs()
	{
		const elements = [];

		for(const collab of this.collabs)
		{
			elements.push(
				<Col xl="4" lg="6" md="12">
					<CollabCardSection
						title={ collab.title }
						image={ collab.image }
						description={ collab.description }
					/>
				</Col>
			);
		}
		return elements;
	}

	render()
	{
		const mobile = this.state.mobile;

		return (
			<div className="page-content">
				<div className={ `aboutme-title ${ mobile ? 'aboutme-title-mobile' : '' }` }>
					Filmography
				</div>
				<Container fluid className="px-0">
					<Row>
						{ this.renderFilmography() }
					</Row>
					<Row>
						{ this.renderCollabs() }
					</Row>
				</Container>
			</div>
		);
	}
}/*
{ this.renderCard("Collab: United Airlines", 2020, "Internal marketing video campaign", null) }
{ this.renderCard("Collab: Who'z the Boss Music Library", 2020, "TV & Internet Spots, Album cover design", null) }
{ this.renderCard("Collab: Chicago Filmmakers", 2020, "Promos for summer workshops, 38th Reeling Film Festival ", null) }
*/
