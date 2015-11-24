var vows = require('vows')
var assert = require('assert')
var chord = require('../lib/chord')

vows.describe('scale.chord').addBatch({
  'chord of major': function () {
    assert.equal(chord('c d e f g a b'), 'CM')
  }
}).export(module)
