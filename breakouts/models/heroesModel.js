var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
  name: String,
  costume: String,
  powers: {type: Array, default: []},
  facialHair: {type: Boolean, default: false}
  backStory: {type: String, default : 'So mysterious...could be Bruce Valanche'}
  // sidekick: {}
});

/** ('mongoose name', name for schema, 'forcedName') **/
/** In Mongo it is db.heros **/
/** Module.exports says "MAKE IT AVAILABLE ELSEWHERE!"**/
module.exports = mongoose.model('Hero', heroSchema, 'heroes')
