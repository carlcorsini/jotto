import React from 'react'
import FadeIn from 'react-fade-in'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  let contents
  if (props.guessedWords.length === 0) {
    contents = <span data-test="guess-instructions" />
  } else {
    const guessedWordsRows = props.guessedWords.map((word, idx) => (
      <tr key={idx} data-test="guessed-word">
        <td>{idx + 1}</td>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <FadeIn>
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <p>Total Guesses: {guessedWordsRows.length}</p>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows.reverse()}</tbody>
          </table>
        </div>
      </FadeIn>
    )
  }
  return <div data-test="component-guessed-words">{contents}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords
