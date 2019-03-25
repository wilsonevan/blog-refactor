import React from 'react';
import { Link, } from 'react-router-dom';
import { connect, } from 'react-redux';
import { Card, Button, } from 'semantic-ui-react';
import PostView from './PostView'
import PostForm from './PostForm';
import { getPosts, } from '../reducers/posts';

class PostList extends React.Component {

  componentDidMount() {
    this.props.dispatch( getPosts() );
  }

  render() {
    return (
      <div>
        <PostForm />
        <h3>PostList</h3>
        <Card.Group>
        { this.props.posts.map( (post) => {
          return(
            <PostView key={post.id} {...post} />
          )})
        }
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(PostList);
