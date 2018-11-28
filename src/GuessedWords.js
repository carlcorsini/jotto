import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  let contents
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the mf word!</span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, idx) => (
      <tr key={idx} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <thead>
          <tr>
            <th>Guess</th>
            <th>Matching Letters</th>
          </tr>
          <tbody>{guessedWordsRows}</tbody>
        </thead>
      </div>
    )
  }
  return <div data-test="component-guessed-words">{contents}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
