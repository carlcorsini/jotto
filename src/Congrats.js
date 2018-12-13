import React from 'react'
import PropTypes from 'prop-types'
import FadeIn from 'react-fade-in'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

const Congrats = props => {
  if (props.success) {
    return (
      <FadeIn>
        <div className="alert alert-success" data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations, You're an mf geniusss
          </span>
          <br />
          <button
            className="btn btn-success mb-2"
            onClick={props.getSecretWord}>
            New Game
          </button>
        </div>
      </FadeIn>
    )
  } else {
    return <div data-test="component-congrats" />
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
