import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

class Home extends React.Component {
	render() {
		return (
			<div>
				<BlogForm />
				<BlogList />
			</div>
		)
	}
}

export default Home;