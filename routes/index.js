var express = require('express');
var router = express.Router();
const { createHandler } = require("graphql-http/lib/use/express")
const { ruruHTML } = require("ruru/server")
const { buildSchema } = require('graphql');

const GRAPHQL_ROUTER = require('./graphql');


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
      type RootQuery {
        events: [String!]!
      }

      type RootMutation {
        createEvent(name: String): String
      }

      schema {
          query: RootQuery
          mutation: RootMutation
      }
    `),
  rootValue: {
    events: () => {
      return ["Midnight Riders Mini Concert", "Bookworms", "Team Bonding"];
    },
    createEvent: (args) => {
      const eventName = args.name;
      return eventName;
    }
  },
  graphiql: true
})
);

module.exports = router;
