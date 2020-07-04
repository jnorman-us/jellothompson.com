import React from 'react';

import delay from './utils/delay';

import LoadingSection from './sections/loading';

export default class Page extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			loading: false,
			loading_fade: 0,
			loading_gif: false,
			show_page: false,
		};
	}

	async componentDidMount()
	{
		this.setState({ loading: true, });

		for(var step = 0; step < LoadingSection.ANIMATION_STEP(); step ++)
		{
			this.setState({
				loading_fade: this.state.loading_fade + 1,
			});
			await delay(LoadingSection.FADEIN_TIME() / LoadingSection.ANIMATION_STEP());
		}

		this.setState({
			loading_gif: true,
			show_page: true,
		});

		await delay(LoadingSection.GIF_TIME());

		for(var step = 0; step < LoadingSection.ANIMATION_STEP(); step ++)
		{
			this.setState({
				loading_fade: this.state.loading_fade - 1,
			});
			await delay(LoadingSection.FADEOUT_TIME() / LoadingSection.ANIMATION_STEP());
		}

		this.setState({
			loading: false,
			loading_fade: 0,
			loading_gif: false,
		});
	}

	render()
	{
		const loading_fade = 1 - this.state.loading_fade / LoadingSection.ANIMATION_STEP()
		return (
			<div>
				<> { this.state.loading &&
					<div>
						<LoadingSection
							fade={ this.state.loading_fade }
							gif={ this.state.loading_gif }
						/>
					</div>
				} { !this.state.loading &&
					<h2>Bruh</h2>
				}</>
				<> { this.state.show_page &&
					<div style={{
						opacity: loading_fade,
					}}>
						This will be a page...
					</div>
				} </>
			</div>
		);
	}
}
