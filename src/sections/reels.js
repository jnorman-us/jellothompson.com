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

		this.video_1 = React.createRef();
		this.video_2 = React.createRef();
		this.video_3 = React.createRef();

		this.state = {
			mobile: false,
			show_one: false,
			show_two: false,
			show_three: false,
			play: false,
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

		this.setState({
			play: true,
		});

		this.video_1.current.play();
		this.video_2.current.play();
		this.video_3.current.play();

		this.onSlided();
	}

	render()
	{
		//
		// ## TODO ##
		// Make the video items center on the page...
		//
		const show_one = this.state.show_one;
		const show_two = this.state.show_two;
		const show_three = this.state.show_three;
		const play = this.state.play;

		const reel_one_class = `reels-reel reel-one ${ show_one ? 'reel-one-shown' : '' }`;
		const reel_two_class = `reels-reel reel-two ${ show_two ? 'reel-two-shown' : '' }`;
		const reel_three_class = `reels-reel reel-three ${ show_three ? 'reel-three-shown' : '' }`;

		const reel_overlay_class = `reels-overlay ${ play ? 'reels-overlay-none' : '' }`;

		return (
			<div className="reels">
				<div className={ reel_one_class }>
					<video
						id="reels-video-1"
						className="reels-video"
						ref={ this.video_1 }
						muted loop src={ motion_video }
					/>
					<div
						id="reels-overlay-one"
						className={ reel_overlay_class }
					/>
				</div>
				<div className={ reel_two_class }>
					<video
						id="reels-video-2"
						className="reels-video"
						ref={ this.video_2 }
						muted loop src={ motion_video }
					/>
					<div
						id="reels-overlay-two"
						className={ reel_overlay_class }
					/>
				</div>
				<div className={ reel_three_class }>
					<video
						id="reels-video-3"
						className="reels-video"
						ref={ this.video_3 }
						muted loop src={ motion_video }
					/>
					<div
						id="reels-overlay-three"
						className={ reel_overlay_class }
					/>
				</div>
			</div>
		);
	}
}
