import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import '../styles/skills.css';

import design from '../images/skills/design.jpg';
import motion from '../images/skills/motion.jpg';
import videographer from '../images/skills/videographer.jpg';

export default class SkillsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.transition_period = ".3s";
		this.motion_full = 84;
		this.video_full = 75;
		this.design_full = 69;

		this.state = {
			mobile: props.mobile,
			motion_val: 0,
			video_val: 0,
			design_val: 0,
		};
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	handleHover(section, inside)
	{
		if(section == "Motion")
		{
			this.setState({
				motion_val: inside ? this.motion_full : 0,
			});
		}
		else if(section == "Video")
		{
			this.setState({
				video_val: inside ? this.video_full : 0,
			});
		}
		else if(section == "Design")
		{
			this.setState({
				design_val: inside ? this.design_full : 0,
			});
		}
	}

	renderSection(title, image, skill_val, description)
	{
		return (
			<div
				className="skills-section"
				onMouseEnter={ this.handleHover.bind(this, title, true) }
				onMouseLeave={ this.handleHover.bind(this, title, false) }
			>
				<div className="skills-section-background" style={{
					backgroundImage: `url( ${ image })`,
				}} />
				<div className="skills-section-content">
					<CircularProgressbar
						value={ skill_val }
						text={ title }
						styles={ buildStyles({
							textColor: "white",
							pathColor: "white",
							trailColor: "transparent",
							transition: this.transition_period,
						})}
					/>
					<div className="skills-section-content-text">
						{ description }
					</div>
				</div>
			</div>
		);
	}

	render()
	{
		this.mobile = this.state.mobile;

		return (
			<div className="skills">
				{ this.renderSection(
					"Motion",
					motion,
					this.state.motion_val,
					"The art of making stuff move, be it a puppet via strings or a car by steering wheel",
				) }
				{ this.renderSection(
					"Video",
					videographer,
					this.state.video_val,
					"The movement of pixels on a screen, and the camera that captures them.",
				) }
				{ this.renderSection(
					"Design",
					design,
					this.state.design_val,
					"You know what Joseph's really good at. Me neither",
				) }
			</div>
		);
	}
}
