# Meli BFF
## Features

 - Uses [yarn](https://yarnpkg.com)
 - Server-side rendering with [Nextjs](https://nextjs.org/) 
 - Remote data fetching with [SWR](https://github.com/vercel/swr) 
 - UI components isolate with [Storybook](https://storybook.js.org/)
 - Store management with [Redux](https://redux.js.org/)
 - Consistent coding styles with [editorconfig](http://editorconfig.org)
 - Style with [Postcss](https://postcss.org/)
 - Linting js with [eslint](http://eslint.org)
 - Linting css with [stylelint](https://github.com/stylelint/stylelint)
 - Tests with [Testing-Library](https://mochajs.org) and [jest](http://chaijs.com)
 - Code coverage with [istanbul](https://istanbul.js.org)

## Requirements

 - [Node v12+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone git@github.com:RMontSerrat/meli-frontend.git
cd meli-bff
```

#### Install dependencies:

```bash
yarn
```

#### Set environment variables:

```bash
cp .env.sample .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Building for Production

```bash
yarn build
```

## Lint

```bash
# lint js code and fix
yarn lint:js

# lint css code and fix
yarn lint:css
```

## Test

```bash
# run all tests with jest
yarn test

# run all tests and watch for changes
yarn test:watch

# test coverage reports
yarn coverage
```
