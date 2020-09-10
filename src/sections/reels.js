import React from 'react';

import delay from '../utils/delay.js';

import motion_video from '../images/720HD.mp4';
import '../styles/reels.css';

export default class ReelsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.onSlided = props.onSlided;

		this.state = {
			mobile: false,
			show_one: false,
			show_two: false,
			show_three: false,
		};
	}

	async componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	async componentDidMount()
	{
		await delay(300);

		this.setState({
			show_one: true,
		});

		await delay(500);

		this.setState({
			show_two: true,
		});

		await delay(600);

		this.setState({
			show_three: true,
		});

		await delay(400);

		this.onSlided();
	}

	render()
	{
		const show_one = this.state.show_one;
		const show_two = this.state.show_two;
		const show_three = this.state.show_three;

		const reel_one_class = `reels-reel reel-one ${ show_one ? 'reel-one-shown' : '' }`;
		const reel_two_class = `reels-reel reel-two ${ show_two ? 'reel-two-shown' : '' }`;
		const reel_three_class = `reels-reel reel-three ${ show_three ? 'reel-three-shown' : '' }`;

		return (
			<div className="reels">
				<div className={ reel_one_class }>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
					<div className="reels-overlay-one" />
				</div>
				<div className={ reel_two_class }>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
					<div className="reels-overlay-two" />
				</div>
				<div className={ reel_three_class }>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
					<div className="reels-overlay-three" />
				</div>
			</div>
		);
	}
}
