import React from 'react'
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Card, Button, } from 'semantic-ui-react';
import PostForm from './PostForm';
// import { map } from 'rsvp';

class PostEdit extends React.Component {

	componentDidMount() {
	}
	render() {

		const { title, content } = this.props.posts[this.props.match.params.id]
		
		return (
			<div>
				<Button as={Link} to={`/`} color='grey' size='mini'>Back</Button>
				{/* <Button color='blue' size='mini'>Edit</Button> */}
				<Button color='red' size='mini'>Delete</Button>
				<PostForm />
				<hr />
				View Post:
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
  return { posts: store.posts, };
}

export default connect(mapStateToProps)(PostEdit);