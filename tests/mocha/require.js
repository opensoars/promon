var assert = require('assert');

describe('Requiring the root module file (index.js)', function () {
  it('returns an empty object since its a command line tool', function () {
    var required_module = require('../../index.js');

    var key_count = 0,
        key;

    for (key in required_module) {
      if (required_module.hasOwnProperty(key)) {
        key_count++;
      }
    }

    assert.equal(key_count, 0);
  });
});