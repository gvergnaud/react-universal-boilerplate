// objectToValues :: { Key: Value } -> [Value]
const objectToValues = obj => Object.keys(obj).map(key => obj[key])

export default objectToValues
