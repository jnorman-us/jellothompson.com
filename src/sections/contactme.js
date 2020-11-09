import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';


import background from '../images/background.png';

import 'react-circular-progressbar/dist/styles.css';
import '../styles/contactme.css';

export default class ContactMeSection extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			mobile: props.mobile,
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
		const mobile = this.state.mobile;

		return (
				<Parallax
					bgImage={ background }
					strength={ 500 }
					bgClassName="contactme-background"
				>
					<div className={ `page-content ${ mobile ? 'page-content-mobile' : '' }` }>
						<Container fluid className="text-center">
							<Row>
								<Col className="contactme-header">
									Portfolio
								</Col>
							</Row>
							<Row>
								<Col xs={ 4 }>
									<div className="contactme-wheel">
										<CircularProgressbar
											value={ 0 }
											text={ "Motion" }
											styles={ buildStyles({
												textColor: "white",
												pathColor: "white",
												trailColor: "#fff",
												strokeLinecap: "butt",
												transition: "1s",
											})}
										/>
									</div>
								</Col>
								<Col xs={ 4 }>
									<div className="contactme-wheel contactme-wheel-focused">
										<CircularProgressbar
											value={ 0 }
											text={ "Video" }
											styles={ buildStyles({
												textColor: "white",
												pathColor: "white",
												trailColor: "#fff",
												strokeLinecap: "butt",
											})}
										/>
									</div>
								</Col>
								<Col xs={ 4 }>
									<div className="contactme-wheel">
										<CircularProgressbar
											value={ 0 }
											text={ "Design" }
											styles={ buildStyles({
												textColor: "white",
												pathColor: "white",
												trailColor: "#fff",
												strokeLinecap: "butt",
											})}
										/>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</Parallax>
		);
	}
}
