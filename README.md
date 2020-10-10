# rolling-scopes-nodejs

# Task 1. Caesar cipher CLI tool

## Installation

Please clone source code from repository using SSH or HTTPS:
```
git clone git@github.com:agarmashevska/rolling-scopes-nodejs.git 
```

```
git clone https://github.com/agarmashevska/rolling-scopes-nodejs.git
```

and install dependency:

```
$ npm install
```

## Usage:
CLI tool accepts 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

Shift and action are required options

#### Example of usage:


```js
// Input and output sources are standard input/output

node my_caesar_cli -a encode -s 7 
```

```js
// Input and output sources are specified files

node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```js
// Blended option. Input source - file, output - standard output, e.g. console. Opposite option is also applicable

node my_caesar_cli -a encode -s 7 -i "./input.txt"
```
