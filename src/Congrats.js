import React from 'react'
import PropTypes from 'prop-types'
import FadeIn from 'react-fade-in'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

const randomThing = array => {
  let random = Math.floor(Math.random() * array.length)
  return array[random]
}

const phrases = [
  'a gosh darn genius!',
  'a savant.',
  'the smartest person in the world!',
  'destined for greatness!',
  'insane in the membrane!',
  'my best friend :)',
  'pretty smart.',
]

const gifs = [
  'https://media.giphy.com/media/d31w24psGYeekCZy/giphy.gif',
  'https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif',
  'https://media.giphy.com/media/Srf1W4nnQIb0k/giphy.gif',
  'https://media.giphy.com/media/glEsn20jvC7iE/giphy.gif',
  'https://media.giphy.com/media/DtywZaEoSa13O/giphy.gif',
  'https://thumbs.gfycat.com/CapitalSmugIberianemeraldlizard-size_restricted.gif',
  'https://media.giphy.com/media/l1AsI389lnxkvQHAc/giphy.gif',
  'https://i.imgur.com/3ZJ5ZIO.gif',
  'https://i.gifer.com/L11L.gif',
]

const Congrats = props => {
  if (props.success) {
    let grats = randomThing(phrases)
    let gif = randomThing(gifs)
    return (
      <FadeIn>
        <div className="alert alert-success" data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You're <strong>{grats}</strong> <br />
            The secret word was <strong>{props.secretWord}</strong>.
          </span>
          <br />
          <button
            style={{ marginTop: '1em' }}
            className="btn btn-success mb-2"
            onClick={props.getSecretWord}>
            New Game
          </button>
        </div>
        <div>
          <img
            style={{ marginBottom: '1em' }}
            className="img-fluid"
            src={gif}
            alt="gif"
          />
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
