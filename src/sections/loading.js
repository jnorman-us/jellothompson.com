import React from 'react';

import '../styles/loading.css';

import jt_visuals_gif from '../images/jt-visuals.gif';

export default class LoadingSection extends React.Component
{
	static ANIMATION_STEP() { return 20; }

	static FADEIN_TIME() { return 1000; }
	static GIF_TIME() { return 4420; } // actual is 4920, but we're accounting for
										// fadeout time
	static FADEOUT_TIME() { return 500; }

	constructor(props)
	{
		super(props);

		this.state = {
			fade: props.fade,
			gif: props.gif,
		};
	}

	async componentWillReceiveProps(props)
	{
		this.setState({
			fade: props.fade / LoadingSection.ANIMATION_STEP(),
			gif: props.gif,
		});
	}


	render()
	{
		return (
			<div className="loading" style={{
				opacity: this.state.fade
			}}>
				<> { this.state.gif &&
					<img className="loading-gif" src={ jt_visuals_gif } />
				} </>
			</div>
		);
	}
}
