var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: String,
}, {timestamps: true});
var note = mongoose.model('Note', NoteSchema);