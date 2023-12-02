# Getting Started

[![Netlify Status](https://api.netlify.com/api/v1/badges/0b2f0b7d-93d7-4e9a-ab0a-33a036d17c9c/deploy-status)](https://app.netlify.com/sites/easifem/deploys)

This section describes how you can get our documentation portal up and running on your machine.

```sh
yarn install
npm start
```

Build the website

```sh
yarn build
```

Deploy

```sh
USE_SSH=true yarn deploy
```

or by using

```sh
GIT_USER=<Your GitHub username>  yarn deploy
```
