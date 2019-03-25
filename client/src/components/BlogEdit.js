import React from 'react'
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Card, Button, } from 'semantic-ui-react';
import BlogForm from './BlogForm';
import { map } from 'rsvp';

class BlogView extends React.Component {

	componentDidMount() {
	}
	render() {

		const { title, content } = this.props.blogs[this.props.match.params.id]
		
		return (
			<div>
				<Button as={Link} to={`/`} color='grey' size='mini'>Back</Button>
				{/* <Button color='blue' size='mini'>Edit</Button> */}
				<Button color='red' size='mini'>Delete</Button>
				<BlogForm />
				<hr />
				View Blog Post:
				<Card fluid>
					<Card.Content>
						<Card.Header>{ title }</Card.Header>
						<Card.Description>{ content }</Card.Description>
					</Card.Content>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
  return { blogs: store.blogs, };
}

export default connect(mapStateToProps)(BlogView);