import React from 'react'
import Item from './Item'

class List extends React.Component {

  render () {
    const data = this.props.data
    return (
      <div>
        <ul>
          {
            data.map((item) => {
              return <Item key={item.id} text={item.text} />
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
