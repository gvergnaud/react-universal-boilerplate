import { Schema, arrayOf } from 'normalizr'

export const starwarsCharacter = new Schema('starwarsCharacter', {
  idAttribute: 'name'
})

export const starwarsCharacters = arrayOf(starwarsCharacter)
