import React from 'react';
import { Badge } from 'react-bootstrap';

import '../styles/credits.css';

export default class CreditsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.skill = props.skill;
		this.first = props.first;
	}

	render()
	{
		return (
			<div className="credits">
				<> { !this.first && "| " }</>{ this.skill }&nbsp;
			</div>
		);
	}
}
