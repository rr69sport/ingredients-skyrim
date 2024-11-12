const isString = (string: any) => typeof string === 'string' || string instanceof String

export const normaliceCharacters = (string: string) => {
  if (isString(string)) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}
