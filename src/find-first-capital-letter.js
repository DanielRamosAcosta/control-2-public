/**
 * Encuentra la primera letra en mayúsculas del string
 * @param {string} string texto en el que queremos buscar la letra en mayúsculas
 * @returns {string}
 * @example
 * findFirstCapitalLetter("hola Que tal") // => "Q"
 */
function findFirstCapitalLetter([firstChar, ...restChars]) {
  if (!firstChar) return null

  return isUpperCased(firstChar)
    ? firstChar
    : findFirstCapitalLetter(restChars) 
}

const isUpperCased = char =>
  char === char.toUpperCase() && !isSpecialCharacter(char)

const isSpecialCharacter = char =>
  char === char.toUpperCase() && char === char.toLowerCase()


module.exports = {
  findFirstCapitalLetter
}
