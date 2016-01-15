import expect from 'expect'
import reducer, { types, increment, decrement } from 'state/modules/counter'

describe('Counter reducer', () => {

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ count: 0 })
  })

  it('Should increment', () => {
    expect(
      reducer(undefined, { type: types.INCREMENT })
    ).toEqual({
      count: 1
    })
  })

  it('Should decrement', () => {
    expect(
      reducer(undefined, { type: types.DECREMENT })
    ).toEqual({
      count: -1
    })
  })

})
