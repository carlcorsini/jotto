import React from 'react'
import PropTypes from 'prop-types'
import FadeIn from 'react-fade-in'

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @return {[JSX.element]} Render component or 'null' if success prop is false
 */

const randomThing = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

const phrases = [
  "'re dumb",
  "'re not smart",
  "'re weak willed",
  "'re a quitter",
  "'re a disappointment",
  "'re not my friend anymore",
  "'re not the sharpest tool in the shed",
  ' bring shame upon your family',
]

const gifs = [
  'https://media.giphy.com/media/l378w70Nxv0alv2qk/giphy.gif',
  'https://media.giphy.com/media/3orif7QCyes3GEvsTS/giphy.gif',
  'https://media.giphy.com/media/ivH4UhEAPXNAI/giphy.gif',
  'https://media.giphy.com/media/GUhiBgU0DbWsU/giphy.gif',
  'https://media.tenor.com/images/0329660f240b72537c65be924942e5ae/tenor.gif',
  'https://media.giphy.com/media/KuJesxZSpHoXu/giphy.gif',
  'https://i.gifer.com/1Gys.gif',
  'https://media.giphy.com/media/1JyWrrkCIUQyQ/giphy.gif',
  'https://media.giphy.com/media/wPQJeg7FCW2s/giphy.gif',
  'https://thumbs.gfycat.com/FluidScaredKob-max-1mb.gif',
]

const GiveUp = props => {
  if (props.giveUp) {
    let diss = randomThing(phrases, phrases.length)
    let gif = randomThing(gifs, gifs.length)

    return (
      <FadeIn>
        <div className="alert alert-danger" data-test="component-give-up">
          <span data-test="give-up-message">
            You
            {diss}, the secret word was{' '}
            <b>
              <strong>
                <em>{props.secretWord}</em>
              </strong>
            </b>
            .
          </span>
          <br />
          <button
            className="btn btn-success mb-2"
            onClick={props.getSecretWord}>
            New Game
          </button>
        </div>
        <div>
          <img className="img-fluid" src={gif} alt="gif" />
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
