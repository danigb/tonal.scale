var vows = require('vows')
var assert = require('assert')
var scale = require('..')

vows.describe('music.scale.get').addBatch({
  'get by type and tonic': function () {
    assert.deepEqual(scale('major', 'Db'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
    assert.deepEqual(scale('dorian', 'C'), ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'])
  },
  'get by complete name': function () {
    assert.deepEqual(scale('Db major'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
  },
  'partial': function () {
    assert.deepEqual(scale('major')('Db'), [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C' ])
  },
  'intervals': function () {
    assert.deepEqual(scale('major', false), ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
    assert.deepEqual(scale('major')(false), ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
  }
}).export(module)
