
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name:{ type: String , maxlength: 256},
  discription:{ type: String , maxlength: 256},
  image:{ type: String , maxlength: 256},
  createdAt:{ type: Date , default: Date.now},
  UpdateAt:{ type: Date , default: Date.now},
});


module.exports = mongoose.model('course', course)