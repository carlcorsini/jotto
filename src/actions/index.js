import axios from 'axios'

import { getLetterMatchCount } from '../helpers'
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
}

const api = process.env.apiURL || 'http://localhost:3030'

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and (conditionally)CORRECT_GUESS action
 * @function guessWord
 * @param  {string} guessedWord - guessed word
 * @return {function} - Redux Thunk function
 */

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    })

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}

export const getSecretWord = () => {
  return dispatch => {
    return axios.get(api).then(response => {
      dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data })
      dispatch({ type: actionTypes.RESET_GAME, payload: false })
    })
  }
}

export const giveUp = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GIVE_UP, payload: true })
  }
}
