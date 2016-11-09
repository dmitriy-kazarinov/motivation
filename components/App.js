import React from 'react'
import Title from './Title'
import Todo from './ToDo'

const topTitle = 'Motivation Todo'
const testTitle = 'Test text'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title text={topTitle} strong />
        <Todo />
        __________________________
        <Title text={testTitle} />
      </div>
    )
  }
}

export default App
