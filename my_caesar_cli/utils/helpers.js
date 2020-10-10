const {Transform} = require('stream')
const caesar = require('../caesar')

class TransformWithCaesar extends Transform {
    constructor(options) {
        super(options);

        this.shift = options.shift
        this.action = options.action
    }

    _transform(chunk, encoding, cb) {
        if (chunk === '\u0003') {
            process.exit()
        }
        const str = chunk.toString()
        const getCaesarFn = caesar[this.action](this.shift)
        const encryptedOrDecryptedStr = getCaesarFn(str)

        cb(null, `${encryptedOrDecryptedStr}\n`)
    }
}

const logError = (err, code = 1) => {
    const error = err instanceof Error ? err : new Error(err)
    process.stderr.write(`${error}\n`)
    process.exit(code)
}

const log = msg => {
   process.stdout.write(msg)
}

const logRequiredOptionsError = missedOptions => logError(`Required option${missedOptions.length > 1 ? 's' : ''} ${missedOptions.toString()} should be provided`)

module.exports = { logError, log, logRequiredOptionsError, TransformWithCaesar }