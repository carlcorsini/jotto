import React from 'react'
import PropTypes from 'prop-types'
import FadeIn from 'react-fade-in'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

const randomQuote = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

const phrase = [
  'a gosh darn genius!',
  'a savant.',
  'the smartest person in the world!',
  'destined for greatness!',
  'insane in the membrane!',
  'my best friend :)',
  'pretty smart.',
]

const Congrats = props => {
  if (props.success) {
    let grats = randomQuote(phrase, phrase.length)
    return (
      <FadeIn>
        <div className="alert alert-success" data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You're <strong>{grats}</strong>.
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
