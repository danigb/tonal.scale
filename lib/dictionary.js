'use strict'

var data = require('./scales.json')
var dictionary = require('tonal.dictionary')

/**
 * Scale dictionary
 *
 * @name scale.dictionary
 * @kind constant
 *
 * @example
 * var scales = require('music.kit/scale/dictionary')
 * scales['major'] // => { name: 'major', intervals: ['1', '2', ...], aliases: [] }
 */
module.exports = dictionary(data)
