promon (wip)
======

Monitors a directory and its content for changes and executes specified commands when an update is detected.

[![Build Status](https://travis-ci.org/opensoars/promon.svg)](https://travis-ci.org/opensoars/promon)
[![Coverage Status](https://coveralls.io/repos/opensoars/promon/badge.svg?branch=master&service=github)](https://coveralls.io/github/opensoars/promon?branch=master)

[![Inline docs](http://inch-ci.org/github/opensoars/promon.svg?branch=master)](http://inch-ci.org/github/opensoars/promon)
[![Code Climate](https://codeclimate.com/github/opensoars/promon/badges/gpa.svg)](https://codeclimate.com/github/opensoars/promon)
[![Codacy Badge](https://www.codacy.com/project/badge/43b75eba935c472aa266524a770d88c6)](https://www.codacy.com/app/sam_1700/promon)

[![Dependency Status](https://david-dm.org/opensoars/promon.svg)](https://david-dm.org/opensoars/promon)
[![devDependency Status](https://david-dm.org/opensoars/promon/dev-status.svg)](https://david-dm.org/opensoars/promon#info=devDependencies)


---


## Install

### Current
```
git clone https://github.com/opensoars/promon.git
npm install
```
Make `/scripts` available to your terminal.

### Future
`npm install promon -g`


## Usage

1. `cd` to the directory you want promon to monitor for you.
2. `promon command(s) to fire THEN more_stuff_to_do --debug THEN even more`

Note the command delimiter `THEN` instead of `&&` to chain commands.


## Tests
`npm run local_test`


## Coverage
`npm run local_test` and open `/coverage/lcov-report/index.html` in your browser.


## Documentation
`npm run doc` and open `/doc/jsdoc/index.html` in your browser.