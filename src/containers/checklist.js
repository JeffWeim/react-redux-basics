import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSelectCheckbox, setList } from '../actions/checkbox'
import Yays from '../components/yays'

class Checklist extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { setList } = this.props

    fetch('http://demo1516817.mockable.io/list')
      .then(response => {
        return response.json()
      })
      .then(myJson => {
        setList(myJson)
      })
  }

  sayYay(e) {
    e.preventDefault()
    console.log('yay!')
  }

  renderListitem(list, onSelectCheckbox) {
    if (list.length > 0) {
      return list.map(item => {
        return (
          <li key={item.id}>
            <label htmlFor={`checkbox_${item.id}`}>
              <input
                id={`checkbox_${item.id}`}
                type="checkbox"
                checked={item.checked}
                onChange={e => onSelectCheckbox(item.id, e)}
              />
            </label>
            {item.title} -> Checkbox is checked: {item.checked ? 'yes' : 'no'}
            <Yays sayYay={this.sayYay} />
          </li>
        )
      })
    } else {
      return <p>waiting...</p>
    }
  }

  render() {
    const { list, onSelectCheckbox } = this.props

    return <ul>{this.renderListitem(list, onSelectCheckbox)}</ul>
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSelectCheckbox,
      setList
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist)
