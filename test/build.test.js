var vows = require('vows')
var assert = require('assert')
var build = require('..').build

vows.describe('scale.build').addBatch({
  'null tonic': function () {
    assert.deepEqual(build('c d e f g a b c2 d2', null), ['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    assert.deepEqual(build('1 2 3', null), ['C0', 'D0', 'E0'])
  },
  'build build from intervals': function () {
    assert.deepEqual(build('1 2 3 4', 'C'), ['C', 'D', 'E', 'F'])
    assert.deepEqual(build('8 9 10 11', 'C2'), [ 'C2', 'D2', 'E2', 'F2' ])
  },
  'build build from notes': function () {
    assert.deepEqual(build('C2 D E4 F G A B', 'D5'), ['D5', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C#6'])
    assert.deepEqual(build('D E F G A B C', 'C'), [ 'C', 'D', 'Eb', 'F', 'G', 'A', 'Bb' ])
  },
  'remove duplicaties': function () {
    assert.deepEqual(build('1 2 2 3 4 11 11#', 'C'), ['C', 'D', 'E', 'F', 'F#'])
    assert.deepEqual(build('C D E C4 G5 G7 A5 D9', 'A4'), ['A4', 'B4', 'C#5', 'E5', 'F#5'])
  },
  'get build intervals': function () {
    assert.deepEqual(build('C D E F G A', false), [ '1P', '2M', '3M', '4P', '5P', '6M' ])
  },
  'partial build': function () {
    var major = build('1 3 5')
    assert.deepEqual(major('D'), ['D', 'F#', 'A'])
    var lydian = build('C D E F# G A B')
    assert.deepEqual(lydian('A'), ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#'])
    var aeolian = build('A B C D E F G')
    assert.deepEqual(aeolian('Eb'), [ 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db' ])
  },
  'invalid params': function () {
    assert.deepEqual(build(null, 'C'), [])
  },
  'pitch classes': function () {
    assert.deepEqual(build('c d e f g a b c', false),
      ['1P', '2M', '3M', '4P', '5P', '6M', '7M'])
    assert.deepEqual(build('d e f g a b c d', false),
      ['1P', '2M', '3m', '4P', '5P', '6M', '7m'])
  }
}).export(module)
