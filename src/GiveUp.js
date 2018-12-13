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
  "'re dumb",
  "'re not smart",
  "'re weak willed",
  "'re a quitter",
  "'re a disappointment",
  "'re not my friend anymore",
  "'re not the sharpest tool in the shed",
  ' bring shame upon your family',
]

const GiveUp = props => {
  if (props.giveUp) {
    let diss = randomQuote(phrase, phrase.length)

    return (
      <FadeIn>
        <div className="alert alert-danger" data-test="component-give-up">
          <span data-test="give-up-message">
            You
            {diss}, the secret word was <em>{props.secretWord}</em>
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
    return <div data-test="component-give-up" />
  }
}

GiveUp.propTypes = {
  giveUp: PropTypes.bool.isRequired,
}

export default GiveUp
