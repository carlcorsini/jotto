/**
 * @method getLetterMatchCount
 * @param  {string} guessedWord - Guessed word
 * @param  {string} secretWord - secrete word
 * @return {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  console.log(secretWord)
  const secretLetterSet = new Set(secretWord.toLowerCase().split(''))
  const guessedLetterSet = new Set(guessedWord.toLowerCase().split(''))
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length
}
