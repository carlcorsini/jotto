import React from 'react'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations, You're an mf geniusss
        </span>
      </div>
    )
  } else {
    return <div data-test="component-congrats" />
  }
}
