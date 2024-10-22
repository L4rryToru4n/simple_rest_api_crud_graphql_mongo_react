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


## Tech Stack
This project uses Node.js (Express.js), MongoDB (Mongoose) for storing and managing the data and GraphQL to query data requests. 

## Instructions To Run The Application
```
npm run start
```

## GraphQL Queries To Tests The Application
For getting an existing data
```
query {
  events {
    _id,
    title,
    desription
  }
}
```
![image](https://github.com/user-attachments/assets/6f653602-4df5-4bf9-b155-eccefd026e0b)

For creating a new data
```
mutation {
  createEvent(eventInput: {
    title: "My #2 test title",
    description: "My #2 test description",
    price: 3.99,
    date: "2024-10-22T04:49:47.698Z"
  })
  {
    _id,
    title,
    description,
    price,
    date
  }
}
```
![image](https://github.com/user-attachments/assets/471290ff-42b7-4181-b032-f0028589eab2)
