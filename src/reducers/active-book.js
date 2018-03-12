// state argument is not app state, only the state local to this reducer is responsible for
// state. State just reflows into this funtion each time an action is called

export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}
