import React from 'react'
import List from './List'

const data = []

class Todo extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  update (e) {
    this.setState({text: e.target.value})
  }

  setdata (e) {
    data.push({
      id: Math.random(),
      text: this.state.text
    })
    this.setState({text: ''})
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='Write text'
          value={this.state.text}
          onChange={this.update.bind(this)}
        />
        <button
          onClick={this.setdata.bind(this)}
        >
          Add item
        </button>
        <List data={data} />
      </div>
    )
  }
}

export default Todo
