import { connect } from 'react-redux'

export function onSelectCheckbox(id) {
  return {
    type: 'CHECKBOX_SELECTED',
    payload: id
  }
}

export function setList(list) {
  return {
    type: 'SET_LIST_FROM_FETCH',
    payload: list
  }
}
