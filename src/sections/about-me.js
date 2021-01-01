import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SocialSection from './social.js';

import '../styles/aboutme.css';

import portrait from '../images/portrait.png';

export default class AboutMeSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: props.mobile,
		};
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	render()
	{
		const mobile = this.state.mobile;

		return (
			<div className={ `page-content ${ mobile ? 'page-content-mobile' : '' }` }>
				<Container fluid>
					<Row>
						<Col lg="3" md="4" sm="6" xs="12" className="text-center">
							<img src={ portrait } className="aboutme-image" />
						</Col>
						<Col lg="9" md="8" sm="6" xs="12" className="aboutme-content">
							<div className="aboutme-title">
								About Me
							</div>
							<div className="aboutme-summary">
								Hello! I'm a Post-Production aficionado
							</div>
							<div className="aboutme-text py-3">
								...and editor, though I would consider myself a storyteller more than a filmmaker. My strengths are in my ability in finding a story to tell in the art of the cut. I am very technical, and well versed with Adobe Premiere, After Effects, DaVinci Resolve, Avid Media Composer, and Pro Tools. Every day, I am constantly learning new techniques and skills to better improve as an editor and storyteller. My experience involves extends beyond the visual edit, but designing motion graphics, color grading, and sound design.
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
