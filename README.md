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

- **Feature 1 / card request:** 
As a customer I want to be able to request my credit card, indicating what customizable icon it will have.

- **Feature 2 / card pause:**
As a customer, I want to be able to pause my credit card so that I do not have consumption.

- **Feature 3 / card reactivation:**
As a customer I want to be able to activate my previously paused credit card in order to continue making purchases.

#### Data definition:
We know that the data we handle on the card are the following:

```console
    id:string;
    created_at:string;
    reference:string;
    since:date;
    until:date;
    client:client who request the card;
    status:active/paused/inactive;
    opExternal:Card provider metadata;
    icon:string,'pig'
```
#### Data definition:
With this we can already assemble the first entities of our domain. You can take look here **/src/domain/card.ts**.

<img src="https://github.com/damiancipolat/Clean-Architecture-Credit-Card-TS/blob/main/doc/diagram_domain.png?raw=true" width="250px" />

### Architecture:
Once the domain has been analyzed, it is time to think about our layers, following the style of clean architecture, the layers look different from traditional configurations.

For this scenario we have assembled the following layers that can be seen in the diagram.

<img src="https://github.com/damiancipolat/Clean-Architecture-Credit-Card-TS/blob/main/doc/diagram_layers.png?raw=true" width="650px" />
