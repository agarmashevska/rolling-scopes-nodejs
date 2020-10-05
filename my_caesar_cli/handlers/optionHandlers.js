const { isActionValid, isShiftValid, isOptionSpecified } = require('../utils/validation')
const { logError } = require('../utils/helpers')

const actionHandler = value => {
    let msg = null

    if (!isOptionSpecified(value)) {
        msg = 'Action is required'
        logError(msg)
    }

    if (!isActionValid(value)) {
        msg = 'Action is not valid. Please use decode or encode value'
        logError(msg)
    }

    if (!msg) return value
}

const shiftHandler = value => {
    let msg = null

    if (!isOptionSpecified(value)) {
        msg = new Error('Shift is required')
        logError(msg)
    }

    const shiftNumber = Number(value)
    if (!isShiftValid(shiftNumber)) {
        msg = 'Shift is not valid. Please use number value from 0 to 26'
        logError(msg)
    }

    return shiftNumber
}
module.exports = {
    actionHandler,
    shiftHandler
}