import React from 'react';
import { Link } from 'react-scroll';

import delay from './utils/delay.js';

import './styles/menu.css';

import logo from './images/logo.png';

export default class Menu extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: false,
			fixed: false,
			fixed_animation: false,
		};

		this.componentWillReceiveProps(props);
	}

	async componentWillReceiveProps(props)
	{

		this.setState({
			mobile: props.mobile,
		});

		if(!this.state.fixed && props.fixed)
		{
			this.setState({
				fixed: true,
			});

			await delay(100);

			this.setState({
				fixed_animation: true,
			});
		}
		else if(this.state.fixed && !props.fixed)
		{
			this.setState({
				fixed_animation: false,
			});

			await delay(250);

			this.setState({
				fixed: false,
			});
		}

	}

	renderLink(to, title)
	{
		return (
			<Link
				activeClass="menu-link-active"
				className="menu-link"
				to={ to }
				smooth={ true }
			>{ title }</Link>
		);
	}

	render()
	{
		const mobile = this.state.mobile;
		const fixed = this.state.fixed;
		const fixed_animation = this.state.fixed_animation;

		const menu_class = `menu
			${ mobile ? 'menu-mobile' : '' }
			${ fixed ? 'menu-fixed' : '' }
			${ fixed_animation ? 'menu-fixed-in' : '' }`;

		return (
			<div className={ menu_class }>
				<img className="menu-logo" src={ logo } />
				<> { !this.state.mobile &&
					<div className="menu-links">
						{ this.renderLink("reels", "Reel") } &nbsp;
						{ this.renderLink("aboutme", "About Me") } &nbsp;
						{ this.renderLink("skills", "Skill") } &nbsp;
						{ this.renderLink("portfolio", "Portfolio") } &nbsp;
						{ this.renderLink("contactme", "Contact Me") } &nbsp;
					</div>
				} </>
			</div>
		);
	}
}
