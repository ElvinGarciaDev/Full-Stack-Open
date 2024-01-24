

const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const Person = require('./models/person')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}



const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('build'))


app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
});

app.get("/info", (req, res) => {
  // Get the date
  const date = new Date(8.64e15).toString();

  res.send(`<p>Phonebook has info for ${persons.length} <br> ${date} </p>`);
});

app.get("/api/persons/:id", (req, res) => {
    id = Number(req.params.id)
    

    const person = persons.find(person => person.id === id)
    
    if(person) {
        res.json(person)
    }else {
        res.status(404).end();
    }
})

app.delete("/api/persons/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const person = await Person.findById(id);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    await Person.findOneAndDelete({ _id: id });
    console.log(person)
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});


app.post("/api/persons", (req, res) => {

    const newPerson = new Person({
      name: req.body.name,
      number: req.body.number,
    }
) 


    // // Check for name uniqueness
    // if (persons.some(person => person.name === newPerson.name)) {
    //     return res.status(400).json({ error: 'Name must be unique' });
    // }

    // // Check for number uniqueness
    // if (persons.some(person => person.number === newPerson.number)) {
    //     return res.status(400).json({ error: 'Number must be unique' });
    // }

    
    newPerson.save().then(savedPerson => {
      res.json(savedPerson)
    })
})

app.put('/api/persons/:id', async (request, response, next) => {
  try {
    const body = request.body;

    const person = {
      name: body.name,
      number: body.number,
    };

    const updatedPerson = await Person.findByIdAndUpdate(request.params.id, person, { new: true });

    if (!updatedPerson) {
      return response.status(404).json({ error: 'Person not found' });
    }

    response.json(updatedPerson);
  } catch (error) {
    if (error.name === 'CastError') {
      return response.status(400).json({ error: 'Malformatted id' });
    }
    next(error);
  }
});

app.listen(3001, () => console.log("Running"));
