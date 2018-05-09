// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var countrySchema = new Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  domains: Array,

  callingCodes: Array,
  capital: String,

  flag_url: String,
  flag_base64: String,
  flag_gif: String,
  flag_radical: String,

  currencies: [{  _id: false, code: String, name: String, symbol: String }],
  languages: [{  _id: false, code: String, name: String }],

  created_at: Date,
  updated_at: Date
}, { versionKey: false });

// the schema is useless so far
// we need to create a model using it
var Country = mongoose.model('Country', countrySchema);

// make this available to our users in our Node applications
module.exports = Country;