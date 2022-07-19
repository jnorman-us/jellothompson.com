import React from 'react';
import { Link } from 'react-scroll';

import SocialSection from './social.js';

import '../styles/copyright.css';

export default class CopyrightSection extends React.Component
{
	constructor(props)
	{
		super(props)
		{
			this.state = {
				mobile: props.mobile,
			}
		}
	}

	componentWillReceiveProps(props)
	{
		this.setState({
			mobile: props.mobile,
		});
	}

	renderLink(to, title)
	{
		return (
			<Link
				activeClass="copyright-menu-link-active"
				className="copyright-menu-link"
				to={ to }
				smooth={ true }
			>{ title }</Link>
		);
	}

	render()
	{
		const mobile = this.state.mobile;
		const current_year = (new Date()).getFullYear();

		return (
			<div className="page-content">
				<div className="copyright">
					<div className="copyright-menu">
						{ this.renderLink("aboutme", "About Me") } &#124;&nbsp;
						{ this.renderLink("watch-reel", "Reel") } &#124;&nbsp;
						{ this.renderLink("skills", "Skills") } &#124;&nbsp;
						{ this.renderLink("portfolio", "Portfolio") } &#124;&nbsp;
						{ this.renderLink("contactme", "Contact Me") }
					</div>
					<div className="copyright-text">
						Copyright &copy; { current_year } Jello Thompson.
						All Rights Reserved.
					</div>
					<div className="copyright-socials">
						<SocialSection />
					</div>
				</div>
			</div>
		);
	}
}
