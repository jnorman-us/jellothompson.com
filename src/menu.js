import React from 'react';

import './styles/menu.css';

import logo from './images/logo.png';

export default class Menu extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const white = this.props.white;

		return (
			<div className="menu">
				<img className={ `menu-logo ${ white ? 'menu-logo-inverted' : '' }`} src={ logo } />
			</div>
		);
	}
}
