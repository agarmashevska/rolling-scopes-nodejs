const commander = require('commander')

const { actionHandler, shiftHandler } = require('./handlers/optionHandlers')
const { commanderActionHandler } = require('./handlers/actionHandler')
const { validateRequiredOptions } = require('./utils/validation')
const { logRequiredOptionsError } = require('./utils/helpers')

commander
    .storeOptionsAsProperties(false)
    .allowUnknownOption(false)
    .name('my_caesar_cli')
    .description('Encode and decode a text by Caesar cipher');

commander
    .option('-a, --action <actionType>', 'an action encode/decode', actionHandler)
    .option('-s, --shift <shift>', 'a shift', shiftHandler)
    .option('-i, --input <inputFile>', 'an input file')
    .option('-o, --output <outputFile>', 'an output file')

commander
    .action(() => {
        const opts = commander.opts()

        validateRequiredOptions(
            opts,
            logRequiredOptionsError,
            commanderActionHandler,
            )
    })
    .parse(process.argv)

