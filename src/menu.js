import React from 'react';
import { Link } from 'react-scroll';

import SocialSection from './sections/social.js';

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
			shown: false,
			fixed: false,
			fixed_animation: false,
		};

		this.componentWillReceiveProps(props);
	}

	async componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
			shown: props.shown,
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

			await delay(500);

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
		const shown = this.state.shown;
		const fixed = this.state.fixed;
		const fixed_animation = this.state.fixed_animation;

		const menu_class = `menu
			${ shown ? 'menu-shown' : '' }
			${ mobile ? 'menu-mobile' : '' }
			${ fixed ? 'menu-fixed' : '' }
			${ fixed_animation ? 'menu-fixed-in' : '' }`;

		return (
			<div className={ menu_class }>
				<a href="https://jellothompson.com"><img className="menu-logo" src={ logo } /></a>
				<div className="menu-links">
					<SocialSection />
				</div>
				<> { false &&
					<div className="menu-links">
						{ this.renderLink("aboutme", "About Me") }
						{ this.renderLink("skills", "Skills") }
						{ this.renderLink("portfolio", "Portfolio") }
						{ this.renderLink("contactme", "Contact Me") }
					</div>
				} </>
			</div>
		);
	}
}
