const mongoose = require('mongoose');

const noteSchema = {
    note: String,
 }; 

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;