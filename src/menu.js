import React from 'react';
import { Link } from 'react-scroll';

import './styles/menu.css';

import logo from './images/logo.png';

export default class Menu extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: false,
			open: false,
		};
	}

	componentDidMount()
	{
		window.addEventListener('resize', this.barResize.bind(this));
	}

	hamburgerClick()
	{

	}

	barResize()
	{
		const mobileWidth = 850;

		const width = window.innerWidth;

		if(width <= mobileWidth)
		{
			this.setState({
				mobile: true,
			});
		}
		else
		{
			this.setState({
				mobile: false,
			});
		}
	}

	render()
	{
		const white = this.props.white;

		return (
			<div className="menu">
				<img className={ `menu-logo ${ white ? 'menu-logo-inverted' : '' }`} src={ logo } />
				<div className="menu-selection-section">
					<> { !this.state.mobile &&
						<div>
							<div className="menu-selection">
								<Link to="about-me-section" smooth={ true }>
									About Me
								</Link>
							</div>
							<div className="menu-selection">
								<Link to="reel-section" smooth={ true }>
									Reel
								</Link>
							</div>
							<div className="menu-selection">
								<Link to="portfolio-section" smooth={ true }>
									Portfolio
								</Link>
							</div>
							<div className="menu-selection">
								<Link to="contact-me-section" smooth={ true }>
									Contact Me
								</Link>
							</div>
						</div>
					} { this.state.mobile &&
						<div>
							show a hamburger here
						</div>
					}</>
				</div>
			</div>
		);
	}
}
