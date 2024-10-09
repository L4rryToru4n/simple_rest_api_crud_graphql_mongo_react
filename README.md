# Simple API CRUD Using GraphQL, MongoDB and React.js
## Pre-Introduction
Before getting familiar with the project, some knowledge must be established like what is a RESTful API, REST and API, what is GraphQL and what is the advantage of using GraphQL API rather than just using REST API.

### What is RESTful API, REST and API itself ?
Taking reference from [Amazon Web Service](https://aws.amazon.com/what-is/restful-api/) site, a RESTful API is an interface that two systems use in order to communicate and exchange data securely, reliably and efficiently by following software communication standards.

API or Application Programming Interface is just a defined set of rules that must be followed by systems in order to successfully communicate with each other. There is always two side of communication, there is clients who are requesting data and a server who is serving (responding) to the clients with requested data.

REST or Representational State Transfer is a software architecture that imposes conditions on how an API should work and was created initially as guideline to manage communication on a complex network like internet.

One of the key of the REST principles is that its statelessness. Statelessness means that it is a method of communication between a server and clients in which every requests from the clients can be done independently of all previous requests.

### What is GraphQL API ?
Referenced from [Redhat](https://www.redhat.com/en/topics/api/what-is-graphql) site, GraphQL is a query language for APIs that can be used by clients to create data requests that they only need.

### What are the advantages and disadvantages of using GraphQL API ?
Other than the main advantage of making query requests that gives data which is needed only, the advantage of using GraphQL API is that it can be used on top of existing REST API because it does not dictate a specific application architecture and allows an application API to evolve without breaking existing queries.

While there is an advantage, there is one main disadvantage of using GraphQL API. There is a learning curve that must be familiarized in order to use its functionalities. Also, it shifts much of the work of data query to the server side. This can introduce more complexity for server developers. 