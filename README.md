# Interview Coding Challenge
Welcome to the Fluint.io hands-on coding assignment. The goal of this assignment is NOT to create a production-level service but to allow us to see how you naturally go about implementing solutions to problems.

## Prerequisites
The following tools need to be installed on your development machine:

* Docker Desktop
* docker-compose

## Submission Steps:
1. Fork or degit (link https://github.com/Rich-Harris/degit) this repository.
2. Evaluate the README.md and solve the issues laid out in the scenario.
3. Send any questions for clarification to jon@fluint.io.
4. Submit your application by emailing a link to your solution and resume to jon@fluint.io.

## The Scenario
Build a simple form that allows users to create, edit, and delete data.

This will involve:

### Frontend (fe/):

Create UI with forms to add/edit data.
Display list of data.
Ability to delete data.


### Backend (be/):

APIs to create, read, update, and delete data.
Store data in a MongoDB database.
Database (mongodb/):

Collect data with fields like id, and content.

## The Environment
This is a monorepo for an application with a Next.js frontend and a Nest.js backend. All of the core scaffolding is in place that is needed to have these projects running locally. Everything is encapsulated in a docker-compose environment (including CLI containers), so the only dependencies needed to run the application are Docker Desktop and docker-compose.

The Mongoose configuration is in place for communication between the BE Nest.js project and the FE project.

## Important Commands

### Install dependencies
For the FE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm fe-cli npm install
For the BE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm be-cli npm install
Start the application
Copy code

docker-compose up
Note: This will start up the application and make the frontend of the application available from a browser at http://localhost:8080/, and the backend API is available at http://localhost:3000/. Changes on the backend will be hot deployed to the container.

### Stop the application
Copy code

docker-compose down


### Install a new library
For the FE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm fe-cli npm i <package>
For the BE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm be-cli npm i <package>

### Bash for a project
For the FE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm fe-cli bash
For the BE project:

Copy code

docker-compose -f docker-compose.cli.yml run --rm be-cli bash


## NOTES
- IMPORTANT: CORS is not enabled so make sure to use mode: 'no-cors' on all api calls to the BE
- Commands from the compose file docker-compose.cli.yml run in a container but are mounted to your local file system. 

## VM Comments on this version
Hi there! So even though the notes above say CORS is not enabled, looks like it actually is, if you
look in be/src/main.ts.  I left it alone.  Passing {mode: "no-cors"} as part of the fetch args made
things wonky. I setup fe/app/api.service.ts with fetch to make this easier to change in the future.
I typically use Axios rather than fetch, but for simplicity left this alone.

I ran out of time before I could tweak the designs for tablet / mobile. Also would usually do a bit more
cleanup (for example the React components I added would usually go in subdirectories and follow a 
consistent naming convention).

FE/BE requirements should be met as written in the description, but one bug: the "edit" scenario only works
the first time. Something is wonky with how I setup the NestUI Modal plus Formik for the form validation. If
you refresh the screen you'll be able to edit again.  Also I would have hydrated the system w/ some dummy 
data so you wouldn't have to enter in a bunch of content.

I'm heading to Prague by way of Munich on Friday so will be out of pocket til the 23rd or so, but hopefully
this challenge looks okay! Look forward to comments / future questions.

Vik
