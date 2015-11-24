
/**
 * In music.kit an scale is a set of notes or intervals with a tonic and ordered
 * by pitch
 *
 * The `scale` module has functions to create and manipulate scales
 */
var scale = require('./scale')
scale.build = require('./build')
scale.select = require('./select')
scale.modes = require('./modes')
scale.chord = require('./chord')
scale.names = require('./names')

module.exports = scale
