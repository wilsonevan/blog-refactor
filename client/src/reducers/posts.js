import axios from 'axios';

export const getPosts = ( cb ) => {
	return (dispatch) => {
		axios.get('/api/v1/posts')
			.then( res => dispatch( { type: 'POSTS', posts: res.data, } ) )
    	.then( cb )
    // debugger
	}
}

export default ( state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [action.post, ...state];
    case 'VIEW_POST':
      debugger
      return action.posts
    default:
      return state
  }
}