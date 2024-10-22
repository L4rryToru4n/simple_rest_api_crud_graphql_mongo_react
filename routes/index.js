var express = require('express');
var router = express.Router();
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");
const { buildSchema } = require('graphql');

const EventModel = require('../models/event');

// const GRAPHQL_ROUTER = require('./graphql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/graphiql", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
});

router.use('/graphql', createHandler({
  schema: buildSchema(`
      type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      type RootQuery {
        events: [Event!]!
      }

      type RootMutation {
        createEvent(eventInput: EventInput): Event
      }

      schema {
          query: RootQuery
          mutation: RootMutation
      }
    `),
  rootValue: {
    events: async () => {
      try {
        return await EventModel.find().lean();
      }
      catch(err) {
        throw err;
      }
    },
    createEvent: async (args) => {

      const event = new EventModel({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
      });

      try {
        const createdEvent = await event.save();

        let result = { ...createdEvent._doc };

        console.log(result);
        return result;

      }
      catch(err) {
        console.log(err);
        throw err;
      }
    }
  },
  graphiql: true
})
);

module.exports = router;
