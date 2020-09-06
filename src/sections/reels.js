import React from 'react';

import delay from '../utils/delay.js';

import motion_video from '../images/720HD.mp4';
import '../styles/reels.css';

export default class ReelsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: false,
			one_offset: -34,
			two_offset: -34,
			three_offset: -34,
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
			one_offset: 0,
		});

		await delay(500);

		this.setState({
			two_offset: 33,
		});

		await delay(700);

		this.setState({
			three_offset: 66,
		});
	}

	render()
	{
		const one_offset = this.state.one_offset;
		const two_offset = this.state.two_offset;
		const three_offset = this.state.three_offset;

		return (
			<div className="reels">
				<div id="one" className="reels-reel" style={{
					left: `${ one_offset }%`,
				}}>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
				</div>
				<div id="two" className="reels-reel" style={{
					left: `${ two_offset }%`,
				}}>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
				</div>
				<div id="three" className="reels-reel" style={{
					left: `${ three_offset }%`,
				}}>
					<video className="reels-video" autoPlay muted loop src={ motion_video } />
				</div>
			</div>
		);
	}
}
