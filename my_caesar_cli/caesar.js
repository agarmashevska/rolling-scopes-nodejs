const { alphabet: alphabetUpper, DECODE, ENCODE } = require('./utils/constants')
const alphabetLower = alphabetUpper.toLowerCase()

const caesarHandler = (text, shift) => {
    const textArray = text.split('')
    const shiftValues = textArray.splice(-shift)
    const newTextArray = shiftValues.concat(textArray)
    return newTextArray.join('')
}

const getMappedLetter = outputUpperAlphabet => letter => {
    const outputLowerAlphabet = outputUpperAlphabet.toLowerCase()
    return outputUpperAlphabet[alphabetUpper.indexOf(letter)] ||
        outputLowerAlphabet[alphabetLower.indexOf(letter)] ||
        letter
}

const getProcessedText = (text, shift) => {
    const outputUpperAlphabet = caesarHandler(alphabetUpper, shift)

    const textArray = text.split(' ')
    const processedTextArray = textArray
        .map(
            word => word
                .split('')
                .map(getMappedLetter(outputUpperAlphabet))
                .join('')
        )
    return processedTextArray.join(' ')
}

const getEncryptedTextWithCaesar = shift => text => getProcessedText(text, -shift)
const getDecryptedTextWithCaesar = shift => text => getProcessedText(text, shift)

module.exports = {
    [ENCODE]: getEncryptedTextWithCaesar,
    [DECODE]: getDecryptedTextWithCaesar
}