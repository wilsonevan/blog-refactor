import React from 'react'
// import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Card, Button, } from 'semantic-ui-react';

const BlogView = ({ id, title, content, }) => {

  return (
    <Card fluid>
      <Card.Content>  
        <Card.Header>{ title }</Card.Header>
        <Card.Description>{ content }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as={Link} to={`/blogs/${id}`} color='blue' size='mini'>View</Button>
      </Card.Content>
    </Card>
  )
}

// const mapStateToProps = (store) => {
//   return { blogs: store.blogs, };
// }

export default BlogView;