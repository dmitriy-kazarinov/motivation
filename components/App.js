import React from 'react'
import Title from './Title.js'

const topTitle = 'Motivation Todo'
const testTitle = 'test text'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title text={topTitle} strong/>
        <Title text={testTitle} />
      </div>
    )
  }
}

export default App
