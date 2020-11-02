import React from 'react';

export default class PortfolioSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: props.mobile,
			category: props.category, // 0: all, 1: photos, 2: videos, 3:
		};
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	render()
	{
		return (
			<div>
				test
			</div>
		);
	}
}
