import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import '../styles/skills.css';

import editing from '../images/skills/editing.jpg';
import vfx from '../images/skills/vfx.jpg';
import audio from '../images/skills/audio.jpg';

export default class SkillsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.transition_period = ".3s";
		this.editing_full = 84;
		this.vfx_full = 75;
		this.audio_full = 69;

		this.state = {
			mobile: props.mobile,
			editing_val: 0,
			vfx_val: 0,
			audio_val: 0,
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
		if(section == "Editing")
		{
			this.setState({
				editing_val: inside ? this.editing_full : 0,
			});
		}
		else if(section == "VFX")
		{
			this.setState({
				vfx_val: inside ? this.vfx_full : 0,
			});
		}
		else if(section == "Audio")
		{
			this.setState({
				audio_val: inside ? this.audio_full : 0,
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
					<div className="skills-section-content-circle">
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
					</div>
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
					"VFX",
					vfx,
					this.state.vfx_val,
					"The movement of pixels on a screen, and the camera that captures them.",
				) }
				{ this.renderSection(
					"Editing",
					editing,
					this.state.editing_val,
					"The art of making stuff move, be it a puppet via strings or a car by steering wheel",
				) }
				{ this.renderSection(
					"Audio",
					audio,
					this.state.audio_val,
					"You know what Joseph's really good at. Me neither",
				) }
			</div>
		);
	}
}
