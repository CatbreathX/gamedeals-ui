# Game Deals

Demo Application for ReduxToolkit Query and React Hooks, using CheapShark API:

[https://apidocs.cheapshark.com/](https://apidocs.cheapshark.com/)


Very much Work in Progress:

Search for Games on sale querying multiple game stores, such as Epic Games Store, GOG, Steam and more.

# Requirements

* Node v16.4.2 ( https://nodejs.org/en/blog/release/v16.4.2/ )

Optional Yarn:

* My preference is [Yarn 1](https://classic.yarnpkg.com/en/docs/install), but NPM will of course suffice. 
  * `npm i yarn`

## Start

To start dev server:

`yarn start`

Served on http://localhost:3000


## Unit Tests

Run Unit tests

`yarn tests:unit`

## e2e tests

First start the dev server:

```
yarn start
```

In another terminal, run the e2e tests:

```
yarn test:e2e
```


## Git Precommit hooks

Precommit hooks will run eslint upon git commit.

