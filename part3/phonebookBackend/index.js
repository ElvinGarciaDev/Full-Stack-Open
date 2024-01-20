const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors')

app.use(cors())


let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
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

app.delete("/api/persons/:id", (req, res) => {

    id = Number(req.params.id)
    persons = persons.filter((person) => person.id !== id);



    res.status(204).end();
})

app.post("/api/persons", (req, res) => {

  console.log(req.body)


    const id = Math.floor(Math.random() * 100)
    console.log(id)

    const newPerson = {
        name: req.body.name,
        number: req.body.number,
        id: id,
      }



    // Check for name uniqueness
    if (persons.some(person => person.name === newPerson.name)) {
        return res.status(400).json({ error: 'Name must be unique' });
    }

    // Check for number uniqueness
    if (persons.some(person => person.number === newPerson.number)) {
        return res.status(400).json({ error: 'Number must be unique' });
    }

    
      persons = persons.concat(newPerson)

      res.json(newPerson)

})

app.listen(3001, () => console.log("Running"));
