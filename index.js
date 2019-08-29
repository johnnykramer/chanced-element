const { validateOptions, validateParams } = require('./src/validation')

const chancedElement = (params = {}, options = {}) => {
  try {
    validateParams(params)
    const { variants } = params
    const sumOfChances = variants.reduce((acc, el) => (acc += el.chance), 0)
    if (sumOfChances !== 100)
      throw new Error('Sum of chances is not equals 100!')
    const { randomEngine } = options
    let random = getRandomByEngine(randomEngine)
    for (let i = 0; i < variants.length; i += 1) {
      if (random < variants[i].chance) {
        return variants[i]
      }
      random -= variants[i].chance
    }
    return variants[-1]
  } catch (e) {
    throw new Error(e)
  }
}

const getRandomByEngine = engineName => {
  return Math.random() * 100 // default
}

module.exports = (options = {}) => {
  try {
    validateOptions(options)
    return {
      chancedElement: params => chancedElement(params, options),
    }
  } catch (e) {
    throw new Error(e)
  }
}
