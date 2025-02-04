const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER': {
      console.log('filter', action.payload)
      
      return action.payload
    }
    default: return state
  }
}

export const setFilter = (text) => {
  return {
    type: 'SET_FILTER',
    payload: text
  }
}


export default filterReducer