import { actionTypes } from '../actions'

/**
 * @function secretWordReducer
 * @param  {string} state - State before reducer
 * @param  {object} action - action sent to reducer
 * @return {string} - new state (secret word payload from action)
 */
const initialState = { serverError: false, word: '' }
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return { word: action.payload, serverError: false }
    case actionTypes.SERVER_ERROR:
      return { ...state, serverError: true }
    default:
      return state
  }
}
