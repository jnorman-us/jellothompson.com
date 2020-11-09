import React from 'react';
import { XMasonry, XBlock } from 'react-xmasonry';

import PortfolioCardSection from './portfolio-card.js';

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
			<div className="page-content">
				<XMasonry>
					<XBlock>
						<PortfolioCardSection
							title="Adobe X Terminator Dark Fate Trailer Remix"
							image="adobe-x-terminator-dark-fate-trailer-remix.jpg"
						/>
					</XBlock>
					<XBlock>
						<PortfolioCardSection
							title="100mg, Ghost Scene"
							image="100mg-ghost-scene.jpeg"
						/>
					</XBlock>
					<XBlock>
						<PortfolioCardSection
							title="Good Mourning"
							image="good-mourning.webp"
						/>
					</XBlock>
					<XBlock>
						<PortfolioCardSection />
					</XBlock>
					<XBlock>
						<PortfolioCardSection />
					</XBlock>
				</XMasonry>
			</div>
		);
	}
}
