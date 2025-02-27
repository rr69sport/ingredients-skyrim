const isString = (string: any) => typeof string === 'string' || string instanceof String

/**
 * ```
 * string: "Some text",
 * searchValue: /[\u0300-\u036f]/g, // default
 * replaceBy: '' // default
 * ```
 */
export const normaliceCharacters = ({ string, searchValue = /[\u0300-\u036f]/g, replaceBy = '' }: {
  string: string
  searchValue?: RegExp
  replaceBy?: string
}) => {
  if (!isString(string)) {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
  return string.normalize('NFD').replace(searchValue, replaceBy).trim().toLowerCase()
}
