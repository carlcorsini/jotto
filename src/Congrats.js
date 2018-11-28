import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div className="alert alert-success" data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations, You're an mf geniusss
        </span>
      </div>
    )
  } else {
    return <div data-test="component-congrats" />
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
