export const then = (successMapper, errorMapper) => promise => promise.then(successMapper, errorMapper)
