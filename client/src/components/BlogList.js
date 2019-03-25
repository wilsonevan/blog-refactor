import React from 'react';
import { Link, } from 'react-router-dom';
import { connect, } from 'react-redux';
import { Card, Button, } from 'semantic-ui-react';
import BlogView from './BlogView'

const BlogList = ({ blogs }) => (

	<div>
		<h3>BlogList</h3>
    <Card.Group>
    { blogs.map( (blog) => {
      return(
        <BlogView key={blog.id} {...blog} />
      )})
    }
    </Card.Group>
	</div>
)

const mapStateToProps = (state) => {
  // debugger
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);
