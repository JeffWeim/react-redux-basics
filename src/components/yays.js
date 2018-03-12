import React, { Component } from 'react'

class Yays extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfClicks: 0
    }
  }

  handleClicks(e) {
    const { sayYay } = this.props

    this.setState(prevState => {
      return { numberOfClicks: (prevState.numberOfClicks += 1) }
    })

    sayYay(e)

    console.log(this.state)
  }

  render() {
    return (
      <a className="yay" href="#" onClick={e => this.handleClicks(e)}>
        Say yay with a console.log()!
      </a>
    )
  }
}

export default Yays
