import axios from 'axios';

// posts Actions
export const getPosts = ( cb ) => {
	return (dispatch) => {
		axios.get('/api/v1/posts')
			.then( res => dispatch( { type: 'POSTS', posts: res.data, } ) )
			.then( cb )
	}
}

export const addPost = ( post ) => {
	return (dispatch) => {
		axios.post('/api/v1/posts', { post })
			.then( res => dispatch( { type: 'ADD_POST', post: res.data, } ) )
	}
}

export const updatePost = (post) => {
  return (dispatch) => {
    axios.put(`/api/v1/posts/${post.id}`, { post })
      .then( res => dispatch({ type: "UPDATE_POST", post: res.data, }))
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/v1/posts/${id}`)
      .then( () => dispatch({ type: "DELETE_POST", id, }))
  }
}


// posts Reducer
export default ( state = [], action ) => {
	switch(action.type){
		case "POSTS":
		return action.posts
		case "ADD_POST":
      return [ action.post, ...state ]
    case "UPDATE_POST":
      return state.map(p => {
        if (p.id === action.post.id)
          return action.post
        return p
      })
    case "DELETE_POST":
      return state.filter(p => p.id !== action.id)
    default:
      return state;
	}
	// }
	// return [];
};