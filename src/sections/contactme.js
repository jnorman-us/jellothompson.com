import React from 'react';
import EmailJS from 'emailjs-com';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Parallax, Background } from 'react-parallax';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


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
						<Container fluid className="contactme">
							<Row>
								<Col xl={ 3 } lg={ 2 } md={ 1 } sm={ 0 }>

								</Col>
								<Col xl={ 6 } lg={ 8 } md={ 10 } sm={ 12 }>
									<Card className="bg">
										<Card.Header>Contact Me</Card.Header>
										<Card.Body className="contactme-content">
											<Card.Text>
												Send me an email about any business deals you want me to manage,
												I am very good at business dealings and such. No need to worry about
												your business
											</Card.Text>
											<Form>
												<Form.Group controlId="user_name">
													<Form.Label> Name </Form.Label>
													<Form.Control type="text" placeholder="John Smith" />
												</Form.Group>
												<Form.Group controlId="email">
													<Form.Label> Email </Form.Label>
													<Form.Control type="text" placeholder="example@email.com" />
												</Form.Group>
												<Form.Group controlId="message">
													<Form.Label>Message</Form.Label>
													<Form.Control as="textarea" rows={5} />
												</Form.Group>
											</Form>
											<Button variant="dark">Send</Button>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
				</Parallax>
		);
	}
}
