import React from 'react';
import { Badge } from 'react-bootstrap';

import '../styles/credits.css';

export default class CreditsSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.skill = props.skill;
	}

	render()
	{
		return (
			<Badge className="credits" pill variant="light">
				{ this.skill }
			</Badge>
		);
	}
}
