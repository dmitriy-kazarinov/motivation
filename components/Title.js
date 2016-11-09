import React from 'react'

function getStyle () {
  return {
    titleBold: {
      fontWeight: 'bold'
    }
  }
}

class Title extends React.Component {
  render () {
    const styles = getStyle()
    const textTitle = this.props.text
    const textStrong = this.props.strong
    return (
      <div style={
        textStrong ? styles.titleBold : {}
      }>
        {textTitle}
      </div>
    )
  }
}

Title.propTypes = {
  text: React.PropTypes.string.isRequired,
  strong: React.PropTypes.bool
}

export default Title
