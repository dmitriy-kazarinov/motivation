import React from 'react'

class Item extends React.Component {
  render () {
    const textItem = this.props.text
    return (
      <li>
        {textItem}
      </li>
    )
  }
}

Item.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Item
