import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import background from '../images/background.png';

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

	async sendEmail(e)
	{
		e.preventDefault();
        
		alert('Email Sent!');
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
									<Card bg="">
										<Card.Header>Contact Me</Card.Header>
										<Card.Body className="contactme-content">
											<Card.Text>
												Send me an email if you want to collaborate, and I'll be happy to respond
											</Card.Text>
											<Form onSubmit={ this.sendEmail.bind(this) }>
												<input type="hidden" name="to_name" value="Jello Thompson" />
												<Form.Group controlId="from_name">
													<Form.Label> Name </Form.Label>
													<Form.Control name="from_name" type="text" placeholder="John Smith" />
												</Form.Group>
												<Form.Group controlId="reply_to">
													<Form.Label> Email </Form.Label>
													<Form.Control name="reply_to" type="text" placeholder="example@email.com" />
												</Form.Group>
												<Form.Group controlId="message">
													<Form.Label>Message</Form.Label>
													<Form.Control name="message" as="textarea" rows={5} />
												</Form.Group>
												<Button variant="dark" type="submit">Send</Button>
											</Form>
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
