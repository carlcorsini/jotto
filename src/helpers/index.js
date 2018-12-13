/**
 * @method getLetterMatchCount
 * @param  {string} guessedWord - Guessed word
 * @param  {string} secretWord - secrete word
 * @return {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  console.log(secretWord, guessedWord)
  const secretLetterSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length
}
