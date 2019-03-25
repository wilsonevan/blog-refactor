import React from 'react';
import { connect, } from 'react-redux';
import { updatePost, addPost, } from '../reducers/posts'
import { Form, Button, } from 'semantic-ui-react';

class PostForm extends React.Component {

  initialState = { title: '', content: '', }
  
  state = { ...this.initialState };

  componentDidMount() {
    if (this.props.post) 
      this.setState({ ...this.props.post, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const post = { ...this.state, };
    const { dispatch, } = this.props;
    const func = post.id ? updatePost : addPost;
    dispatch(func(post));
    this.setState(this.initialState);
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
		this.setState( { [name]: value } );
  }

  render() {
    const { title, content } = this.props;
       
    return (
      <div>
        <h3>{ this.state.headerFlag ? 'Edit Post' : 'Add a Post' }</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input 
              label='Post Title'
              placeholder='Title'
              required
              name='title' 
              value={title} 
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.TextArea 
            name='content' 
            label='Content' 
            placeholder='Content goes here...' 
            value={content} 
            onChange={this.handleChange}
          />
          <Button type='submit' >Submit</Button>
        </Form>
      </div>
    )
  }
}

  // const mapStateToProps = (state, props, ) => {
  // 	return { 
  //     post: state.posts.find( post => post.id === parseInt(props.match.params.id) )
  //   };
  // };

export default connect()(PostForm);