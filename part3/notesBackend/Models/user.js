const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    name: String,
    passwordHash: String,
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
      }
    ],
  })
  
  userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User