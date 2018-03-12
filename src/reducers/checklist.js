export default function(state = {}, action) {
  switch (action.type) {
    case 'CHECKBOX_SELECTED':
      const newState = state.map(item => {
        if (item.id === action.payload) {
          item.checked = !item.checked
        }
        return item
      })

      return newState
    case 'SET_LIST_FROM_FETCH':
      return action.payload
    default:
      return state
  }
}
