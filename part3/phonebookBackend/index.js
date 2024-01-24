const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const Person = require("./models/person");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use(express.static("build"));

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get("/info", async (req, res) => {
  // Get the date
  const date = new Date(8.64e15).toString();

  try {
    const persons = await Person.find();
    console.log(persons);
    res.send(`<p>Phonebook has info for ${persons.length} <br> ${date} </p>`);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/persons/:id", async (req, res) => {
  id = req.params.id;

  try {
    let person = await Person.findById({ _id: id });

    res.status(200).json(person);
  } catch (error) {}
});

app.delete("/api/persons/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const person = await Person.findById(id);

    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }

    await Person.findOneAndDelete({ _id: id });
    console.log(person);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

app.post("/api/persons", (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    number: req.body.number,
  });

  newPerson.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.put("/api/persons/:id", async (request, response, next) => {
  try {
    const body = request.body;

    const person = {
      name: body.name,
      number: body.number,
    };

    const updatedPerson = await Person.findByIdAndUpdate(
      request.params.id,
      person,
      { new: true }
    );

    if (!updatedPerson) {
      return response.status(404).json({ error: "Person not found" });
    }

    response.json(updatedPerson);
  } catch (error) {
    if (error.name === "CastError") {
      return response.status(400).json({ error: "Malformatted id" });
    }
    next(error);
  }
});

app.listen(3001, () => console.log("Running"));
