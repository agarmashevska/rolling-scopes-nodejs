const isInteger = require('lodash/isInteger')
const isNil = require('lodash/isNil')
const { ACTION_OPTIONS, REQUIRED_OPTIONS } = require('./constants')

const isActionValid = value => ACTION_OPTIONS.includes(value)

const isShiftValid = value => isInteger(value) && value < 27 && value >= 0

const isOptionSpecified = opt => !isNil(opt) && opt.length !== 0

const getMissedRequiredOptions = opts => REQUIRED_OPTIONS.filter(optName => !(optName in opts))

const validateRequiredOptions = (opts, errorHandler, cb) => {
    const missedRequiredOptions = getMissedRequiredOptions(opts)
    if (missedRequiredOptions.length > 0) {
       return errorHandler(missedRequiredOptions)
    }

    cb(opts)
}

module.exports = {
    validateRequiredOptions,
    isOptionSpecified,
    isActionValid,
    isShiftValid,
}