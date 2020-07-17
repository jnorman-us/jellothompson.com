import React from 'react';
import { createGlobalStyle } from 'styled-components';

import delay from './utils/delay';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import shrek_jpg from './images/shrek.jpg';

import LoadingSection from './sections/loading';
import WelcomeSection from './sections/welcome';
import AboutMeSection from './sections/about-me';
import ReelSection from './sections/reel';
import PortfolioSection from './sections/portfolio';
import ContactMeSection from './sections/contact-me';

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
		this.setState({
			loading: true,
			loading_fade: LoadingSection.ANIMATION_STEP(),
			loading_gif: true,
		});

		await delay(LoadingSection.GIF_TIME());

		this.setState({
			show_page: true,
		});


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
		const loading_fade = 1 - this.state.loading_fade / LoadingSection.ANIMATION_STEP();

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
					<></>
				}</>
				<> { this.state.show_page &&
					<div style={{
						opacity: loading_fade,
					}}>
						<WelcomeSection />
						<AboutMeSection />
						<ReelSection />
						<PortfolioSection />
						<ContactMeSection />
					</div>
				} </>
			</div>
		);
	}
}
