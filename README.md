promon (wip)
======

Monitors a directory and its content for changes and executes specified commands when an update is detected.


[![Inline docs](http://inch-ci.org/github/opensoars/promon.svg?branch=master)](http://inch-ci.org/github/opensoars/promon)
[![Build Status](https://travis-ci.org/opensoars/promon.svg)](https://travis-ci.org/opensoars/promon)
[![Coverage Status](https://coveralls.io/repos/opensoars/promon/badge.svg)](https://coveralls.io/r/opensoars/promon)
[![Codacy Badge](https://www.codacy.com/project/badge/43b75eba935c472aa266524a770d88c6)](https://www.codacy.com/app/sam_1700/promon)
[![Dependency Status](https://david-dm.org/opensoars/promon.svg)](https://david-dm.org/opensoars/promon)
[![devDependency Status](https://david-dm.org/opensoars/promon/dev-status.svg)](https://david-dm.org/opensoars/promon#info=devDependencies)


---


## Install
```
git clone https://github.com/opensoars/promon.git
npm install
```
Make ./scripts available to your terminal.

### Future install
`npm install promon -g`




## Usage

1. `cd` to the directory you want promon to monitor for you.
2. `promon command(s) to fire THEN more_stuff_to_do --debug THEN even more`

Note the command delimiter `THEN` instead of `&&` to chain commands.


## Tests
`npm run local_test`

## Coverage



## Documentation