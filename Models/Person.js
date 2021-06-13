const mongoose = require ('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema;

const personSchema = new Schema ({
    name : String,
    age: Number
});

// create collection using person.Schema.
const person = mongoose.model("person",personSchema);
module.exports = person;