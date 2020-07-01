<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Basic repo for learning NestJS and associated technologies. As of 06/20/2020, this repo will expect a Postgres DB running locally to work correctly. 
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## How to Use
Auth:
@POST '/signup' - BODY{ username: string, password: string } (Does have validation requirements, for min/max length, unique in case of username, and a regex for password)
@POST '/signin' - BODY{ username: string, password: string } (Will obviously be validated- once validated, a jwt will be returned for use in header for task service)

Tasks [REQUIRES AUTHORIZATION HEADER with JWT]:
@GET '/tasks' - QUERY{ *OPTIONAL PARAMS status: TaskStatus (OPEN, IN_PROGRESS, DONE), search: string } (Will search in both title and description for tasks. No params will result in returning all tasks)
@GET 'tasks/:id' - PARAM{ id: number } (Will be validated as a number)
@POST '/tasks' - BODY{ title: string, description: string } (Will be validated to not be empty)
@DELETE '/tasks/:id' - PARAM{ id: number } (Will be validated as a number)
@PATCH 'tasks/:id/status' - PARAM{ id: number } && BODY{ status: TaskStatus(OPEN, IN_PROGRESS, DONE) } (Will be validated to be both a number for id, and a TaskStatus for status)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
