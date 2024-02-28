const isNumber = (value) => {
  const parseValue = parseInt(value, 10)
  return !Number.isNaN(parseValue) && Number.isFinite(parseValue)
}

export { isNumber }
