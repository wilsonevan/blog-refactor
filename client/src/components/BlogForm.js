import React from 'react';
import { connect, } from 'react-redux';
import { Form, Button, } from 'semantic-ui-react';

class BlogForm extends React.Component {
  state = { title: '', content: '', headerFlag: false, };


  componentDidMount() {
    let headerFlag = false
    // debugger

    if ( this.state.title != "" ){
      headerFlag = true
    }

    this.setState( {title: this.state.title, content: this.state.content, headerFlag: headerFlag, } )
  }

  handleSubmit = (e) => {
		e.preventDefault();
    const { dispatch, id, } = this.props;
    const { title, content } = this.state;
    // debugger
		const blog = { title, id, content, };
		dispatch({ type: 'ADD_BLOG', blog, });
		dispatch({ type: 'INC_ID', });
    this.setState({ title: '', content: '', });
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
		this.setState( { [name]: value } );
  }

  render() {
    const { title, content } = this.state;
       
    return (
      <div>
        <h3>{ this.state.headerFlag ? 'Edit Blog' : 'Add a Blog' }</h3>
        <Form>
          <Form.Field>
            <Form.Input 
              label='Blog Title'
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
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  const newId = state.nextId

	return { id: newId, title: state.blogs[newId].title, content: state.content, };
};

export default connect(mapStateToProps)(BlogForm);