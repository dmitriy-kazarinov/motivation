import React from 'react'

class List extends React.Component {

  render () {
    const data = this.props.data
    return (
      <div>
        <ul>
          {
            data.map((item) => {
              return <li key={item.id}>{item.text}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired
}

export default List
