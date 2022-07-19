import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
							<div className={ `aboutme-title ${ mobile ? 'aboutme-title-mobile' : '' }` }>
								About Me
							</div>
							<div className="aboutme-summary">
								Howdy, my name is Jello Thompson
							</div>
							<div className="aboutme-text py-3">
							I’m an editor, colorist, vfx artist, sound designer, post-production specialist, filmmaker, and more
importantly a storyteller. Through editing, piecing together the story, and reining in everyone’s
creative vision is my speciality. There are many ways to cut a film, and it is my job to find the
best story to tell. My background as an editor has a very heavy visual effects influence as
creating those effects and motion graphics is how I ended up becoming an editor. I started my
career in post through After Effects, and have been working with AE since 2013. I’m a very
technical person and work diligently to know my software in and out. I’m adept across multiple
platforms, with a focus in Avid and Premiere Pro. Beyond these two NLE’s, I am well-versed in
Pro Tools and DaVinci Resolve and the tools used for post-audio and finishing. Beyond my
skills and knowledge in the cutting room, I’m a team player. I collaborate frequently and work to
ensure deadlines are met. I’m here to help in any capacity and confident that as a part of your
team, we can make some movie magic.
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
