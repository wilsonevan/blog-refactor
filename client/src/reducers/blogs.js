const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'VIEW_BLOG':
      debugger
      return action.blogs
    default:
      return state
  }
}

export default blogs;