import React from 'react'
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Card, Button, } from 'semantic-ui-react';
import PostForm from './PostForm';
import { deletePost, addPost } from '../reducers/posts';
// import { map } from 'rsvp';

const PostEdit = ({ post = {}, dispatch }) => {

	const { title, content, id} = post

	// handleDelete = (id) => {
	// 	dispatch(deletePost(id));
	// }
	
	return (
		<div>
			<Button as={Link} to={`/posts`} color='grey' size='mini'>Back</Button>
			{/* <Button color='blue' size='mini'>Edit</Button> */}
			<Button color='red' size='mini' onClick={ () => dispatch(deletePost(id)) } as={Link} to={`/posts`} >Delete</Button>
			<PostForm post={post}/>
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

const mapStateToProps = (state, props, ) => {
	return {
		post: state.posts.find( post => post.id === parseInt(props.match.params.id) )
		// this.state.match.params.id
	}
}

export default connect(mapStateToProps)(PostEdit);