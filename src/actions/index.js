import axios from 'axios'

import { getLetterMatchCount } from '../helpers'

const api = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3030'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
  SERVER_ERROR: 'SERVER_ERROR',
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and (conditionally)CORRECT_GUESS action
 * @function guessWord
 * @param  {string} guessedWord - guessed word
 * @return {function} - Redux Thunk function
 */

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord.word

    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    })

    if (guessedWord.toLowerCase() === secretWord.toLowerCase()) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}

export const getSecretWord = () => {
  return async dispatch => {
    return axios
      .get(api)
      .then(response => {
        dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data })
        dispatch({ type: actionTypes.RESET_GAME, payload: false })
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: actionTypes.SERVER_ERROR,
          payload: 'server down',
        })
      })
  }
}

export const giveUp = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GIVE_UP, payload: true })
  }
}
