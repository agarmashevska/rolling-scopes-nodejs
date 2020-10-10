const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ENCODE = 'encode'
const DECODE = 'decode'
const ACTION_OPTIONS = [ENCODE, DECODE]
const REQUIRED_OPTIONS = ['action', 'shift']

module.exports = {
    ENCODE,
    DECODE,
    ACTION_OPTIONS,
    alphabet,
    REQUIRED_OPTIONS,
}