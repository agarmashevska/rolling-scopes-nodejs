const { pipeline } = require('stream')
const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
const { TransformWithCaesar, log, logError } =  require('../utils/helpers')

const pipelineAsync = promisify(pipeline)

const getReadableStream = async (opts) => {
    try {
        const filePath = path.resolve(__dirname, '..', opts.input)
        await fsPromises.access(filePath, fs.constants.R_OK)
        const stream = fs.createReadStream(filePath)
        stream.on('error', err => {
            logError(`Caught Exception. ${err}\n`)
        })
        return stream
    } catch (err) {
        logError('File doesn\'t exist or could not be read\n')
    }
}

const getWritableStream  = async (opts) => {
    try {
        const filePath = path.resolve(__dirname, '..', opts.output)
        await fsPromises.access(filePath, fs.constants.W_OK)
        const stream = fs.createWriteStream(filePath, { flags: 'a' })
        stream.on('error', err => {
            logError(`Caught Exception. ${err}\n`)
        })
        return stream
    } catch (err) {
        logError('File doesn\'t exist or could not be written\n')
    }
}

const commanderActionHandler = async (opts) => {
    const readable = opts.input ? await getReadableStream(opts) : process.stdin
    const writable = opts.output ? await getWritableStream(opts) : process.stdout
    const transform = new TransformWithCaesar(opts)

    pipelineAsync(
        readable,
        transform,
        writable,
    )
        .then(() => log(`Pipeline successful\n`))
        .catch(logError)
}

module.exports = {
    commanderActionHandler
}