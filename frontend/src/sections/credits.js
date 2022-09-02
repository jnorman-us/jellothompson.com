import React from 'react';

import '../styles/credits.css';

export default class CreditsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.skill = props.skill;
		this.last = props.last;
	}

	render()
	{
		return (
			<div className="credits">
				{ this.skill } <> { !this.last && "|" }</>&nbsp; 
			</div>
		);
	}
}
