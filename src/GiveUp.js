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
  "You're dumb.",
  "You're not smart.",
  "You're weak willed.",
  "You're a quitter.",
  "You're a disappointment.",
  "You're not my friend anymore.",
  "You're not the sharpest tool in the shed.",
  'You bring shame upon your family.',
  "You should take a step back and think about what you're doing with your life.",
  "You should've stayed in school.",
  'You need to go to sleep.',
  'Take a lap.',
  'Wow, really?',
  "Is that all you've got?",
  'Grow a brain.',
  'Read a book.',
  'You idiot!',
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
  'https://media.tenor.com/images/387f1df2d3bd94e8a954bab19a7cdd0c/tenor.gif',
  'https://media.giphy.com/media/Gk6E0UXUew9lC/giphy.gif',
  'https://media.giphy.com/media/3ohuAsb6udbvU2Us3S/giphy.gif',
  'https://thumbs.gfycat.com/GratefulWelloffCrocodileskink-small.gif',
  'https://i.gifer.com/1Gz9.gif',
  'https://media.giphy.com/media/tnKFstAe0LU3u/giphy.gif',
  'https://fansided.com/wp-content/blogs.dir/229/files/2014/02/6.gif',
  'https://media.giphy.com/media/AZzm924YkjM0o/giphy.gif',
]

const GiveUp = props => {
  if (props.giveUp) {
    let diss = randomThing(phrases)
    let gif = randomThing(gifs)

    return (
      <FadeIn>
        <div className="alert alert-danger" data-test="component-give-up">
          <span data-test="give-up-message">
            {diss} The secret word was{' '}
            <b>
              <strong>
                <em>{props.secretWord}</em>
              </strong>
            </b>
            .
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
            style={{ marginBottom: '1em', borderRadius: '.5em' }}
            className="img-fluid"
            src={gif}
            alt="gif"
          />
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
