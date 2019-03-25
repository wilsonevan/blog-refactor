const nextId = (state = 0, action) => {
  switch (action.type) {
    case 'INC_ID': {
			// debugger
			return state + 1
		}
		default: {
			// debugger
			return state
		}
			
  }
}

export default nextId;