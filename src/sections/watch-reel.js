import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import watchreel from '../images/watchreel.jpg';
import circledplay from '../images/circledplay.png';

import '../styles/contactme.css';
import '../styles/watchreel.css';

export default class WatchReelSection extends React.Component
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
			<Parallax
				bgImage={ watchreel }
				strength={ -100 }
				bgClassName="watchreel-background"
			>
				<div className={ `page-content ${ mobile ? 'page-content-mobile' : '' }`}>
					<div className={ `watchreel ${ mobile ? 'watchreel-mobile' : '' }` }>
						<a href="https://youtu.be/DdUjhy0j3j4" target="_blank" className="watchreel-content">
							Watch the Reel
							<img src={ circledplay } className="watchreel-image" />
						</a>
					</div>
				</div>
			</Parallax>
		);
	}
}
