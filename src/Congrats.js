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
  "You're a gosh darn genius!",
  "You're a savant.",
  "You're the smartest person in the world!",
  "You're destined for greatness!",
  "You're my best friend :)",
  "You're pretty smart.",
  "You're a bad ass mother fucker.",
  "You're going places.",
  "You're the best!",
  "You're the bees knees!",
  "You're the mosquitos knuckles.",
  "You're not just another pretty face!",
  'You get 6,000,000 points!',
  "We're so proud of you!",
  '10 points for Gryffindor',
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
  'http://media.tumblr.com/tumblr_m3ppveMgu71r4lux2.gif',
  'https://vignette.wikia.nocookie.net/the-secret-society/images/6/6e/Minnie-Congrats.gif/revision/latest?cb=20180418215758',
  'https://i0.wp.com/www.eventstodayz.com/wp-content/uploads/2017/08/congrats-image-gif-2017.gif?zoom=2.625&resize=368%2C211',
  'https://i.gifer.com/Sgnb.gif',
  'https://i.pinimg.com/originals/b8/0c/fc/b80cfcd98f163d6ff190488f3985e7e5.gif',
  'https://cdn.dribbble.com/users/104921/screenshots/2853932/july_shot.gif',
  'https://66.media.tumblr.com/941a210daf967e6671760b3b1d1c1482/tumblr_p3alid1WHj1qe8lb8o1_400.gif',
  'http://31.media.tumblr.com/88ee2a56006928ef66128912fec100f1/tumblr_n1cq2oeUeD1t77ydgo1_400.gif',
  'http://www.reactiongifs.com/r/gj1.gif',
  'https://media.giphy.com/media/11ezOCtJ7Eetri/giphy.gif',
  'https://media.giphy.com/media/wAq7v641KWnjq/giphy.gif',
]

const Congrats = props => {
  if (props.success) {
    let grats = randomThing(phrases)
    let gif = randomThing(gifs)
    return (
      <FadeIn>
        <div className="alert alert-success" data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! <br /> <strong>{grats}</strong> <br />
            <br />
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
