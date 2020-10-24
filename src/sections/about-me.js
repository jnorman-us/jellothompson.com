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
						<Col lg="4" md="5" sm="6" xs="12" className="text-center">
							<img src={ portrait } className="aboutme-image" />
							<div className="aboutme-social">
								<SocialSection />
							</div>
						</Col>
						<Col lg="8" md="7" sm="6" xs="12" className="aboutme-content">
							<div className="aboutme-title">
								About Me
							</div>
							<div className="aboutme-summary">
								I'm a Navy Seal, don't Fuck with me.
							</div>
							<div className="aboutme-text py-3">
								I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I...
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
