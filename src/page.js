import React from 'react';

import LoadingSection from './sections/loading.js';

import './styles/index.css';

export default class Page extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			loading: false,
			displaying: false,
			mobile: false,
		};
	}

	async componentDidMount()
	{
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));

		this.setState({
			loading: true,
		});
	}

	handleLoaded()
	{
		this.setState({
			displaying: true,
		});
	}

	handleFaded()
	{
		this.setState({
			loading: false,
		});
	}

	render()
	{
		const mobile = this.state.mobile;

		return (
			<div className="page">
				<> { this.state.loading &&
					<LoadingSection
						mobile={ mobile }
						onLoaded={ this.handleLoaded.bind(this) }
						onFaded={ this.handleFaded.bind(this) }
					/>
				} </>
				<> { this.state.displaying &&
					<div>
						This is where the contents of the scrollable page will go
					</div>
				} </>
			</div>
		);
	}

	updateDimensions()
	{
		const width = window.innerWidth;
		const mobile_width = 800;

		if(width <= mobile_width && !this.state.mobile)
		{
			this.setState({
				mobile: true,
			});
		}
		else if(width > mobile_width && this.state.mobile)
		{
			this.setState({
				mobile: false,
			});
		}
	}
}
