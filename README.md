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
Run the script **/data/tables.sql** to create tables in the databas.

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

#### Layer by layer:
- **Domain**:In this layer is where we will put the entities, value objects and business rules. 
- **Application**:Application: This is where functionality really lives, application logic is included.
- **Interface**: Here we put the communication layer between infrastructure and application.
- **Infrastructure**: Here we put the part of the system that has contact with the outside, eg: BD, 3rd party libraries, integration with other services, configurations. The idea of ​​this layer is to be able to have contact with this layer through abstractions.

### To use:
Follow this steps to install the project

#### Request card:
Run the following curl to make a card retrieval.

```console
curl --location --request POST 'http://127.0.0.1:8080/card' \
--header 'Content-Type: application/json' \
--data-raw '{
    "externalId":"1",
    "icon":"mario"
}'
```

#### Pause card:
Run the following curl to make a card pause.

```console
curl --location --request PATCH 'http://127.0.0.1:8080/card/pause/1' \
--header 'Content-Type: application/javascript' \
--data-raw '{
    "externalId":"1"
}'
```

#### Activate card:
Run the following curl to make a card reactivation.

```console
curl --location --request PATCH 'http://127.0.0.1:8080/card/enable/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "externalId":"1"
}'
```

## Readings:
This is just the beginning, of a topic that is gigantic, I recommend that you review some of these links that I collect to put together this project.

- https://www.youtube.com/watch?v=SPB9WknAB4E
- https://franiglesias.github.io/ddd-way-domain/
- https://medium.com/geekculture/thoughts-on-domain-driven-design-in-functional-languages-83c43ec518d
- https://github.com/jbuget/nodejs-clean-architecture-app
- https://github.com/joshuaalpuerto/node-ddd-boilerplate
- https://github.com/ricomonster/node-ddd
- https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30
- https://makingloops.com/why-should-you-use-the-repository-pattern/
- https://medium.com/@cesiztel/repository-pattern-en-laravel-f66fcc9ea492
- https://github.com/jbuget/nodejs-clean-architecture-app/tree/master/lib/interfaces
- https://github.com/joshuaalpuerto/node-ddd-boilerplate
- https://dev.to/vickodev/nodetskeleton-clean-arquitecture-template-project-for-nodejs-gge
- https://blog.octo.com/en/clean-node-part-1/
- https://www.youtube.com/watch?v=4vgSbPzfxok
- https://www.youtube.com/watch?v=VLhdDYaW-uI
- https://www.youtube.com/watch?v=kHyA_lHvJBM&t=311s
