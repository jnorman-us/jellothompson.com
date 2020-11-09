import React from 'react';

import '../styles/skills.css';

import videographer from '../images/videographer.jpg';
import motion from '../images/motion.jpg';
import design from '../images/design.jpeg';

export default class SkillsSection extends React.Component
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
		this.mobile = this.state.mobile;

		return (
			<div className="skills">
				<div className="skills-section">
					<img src={ videographer } className="skills-photo" id="section1" />
				</div>
				<div className="skills-section">
					test
				</div>
				<div className="skills-section">

				</div>
			</div>
		);
	}
}
