import { actionTypes } from '../actions'

/**
 * @function successReducer
 * @param  {array} state  - array of guessed words
 * @param  {object} action - action to be reduced
 * @return {boolean} - new success State
 */

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true
    case actionTypes.RESET_GAME:
      return false
    default:
      return state
  }
}
