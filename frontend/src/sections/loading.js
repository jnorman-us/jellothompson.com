import React from 'react';

import delay from '../utils/delay.js';

import '../styles/loading.css';

import jt_visuals_gif from '../images/jt-visuals.gif';

export default class LoadingSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			opacity: 100,
			mobile: props.mobile,
		};

		this.onLoaded = props.onLoaded;
		this.onFaded = props.onFaded;
	}

	async componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	async componentDidMount()
	{
		await delay(4200);

		this.onLoaded();

		for(var i = 1; i <= 15; i ++)
		{
			this.setState({
				opacity: (100 - 100 * i / 15) / 100,
			});
			await delay(500 / 15);
		}

		this.onFaded();
	}

	render()
	{
		const opacity = this.state.opacity;
		const mobile = this.state.mobile;

		return (
			<div className="loading" style={{
				opacity: opacity
			}}>
				<img className={
					`loading-gif ${ mobile ? 'loading-gif-mobile' : ''}`
				} src={ jt_visuals_gif } />
			</div>
		);
	}
}
