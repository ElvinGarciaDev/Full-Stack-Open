const mongoose = require('mongoose')



if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://elvingarcia19:${password}@cluster0.qge6sxq.mongodb.net/personsApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personsSchema = new mongoose.Schema({
    name: String,
  number: String,
})

const Person = mongoose.model('Person', personsSchema)

const person = new Person({
  name:  process.argv[3],
  number:  process.argv[4],
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})

// Note.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })