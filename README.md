<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# Real clean architecture api example
An example of how to model and develop using clean architeture, to create a microservice to handle credit cards features from a fintech app, this is a learning exercice.

### Introduction:
In this case I present a modeling scenario of a microservice created with nodejs and typescript. Simulating to be the backend of a credit card feature.
We will work as a base using the DDD methodology.

### Stack:
- Node.js
- Express js
- Typescript
- Docoker
- Postresql

### Install:
Follow this steps to install the project

```console
npm install
docker-compose up -d
npm start
```
### Scenario:
Before starting with software issues, following the principles of DDD, we must determine which will be our domain to solve.
Let's imagine that we have several user stories that define the following behavior for us.

- **Feature 1 - Card request:**
As a customer I want to be able to request my credit card, indicating what customizable icon it will have.
- **Feature 2 - Card pause:**
As a customer, I want to be able to pause my credit card so that I do not have consumption.
- **Feature 3 - Card reactivation:**
As a customer I want to be able to activate my previously paused credit card in order to continue making purchases.
