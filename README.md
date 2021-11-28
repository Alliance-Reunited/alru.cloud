<div align="center">
    <h1>alru.xyz</h1>
    <h3>A website for the Alliance Reunited Network.</h3>
</div>
<br />

## Installation
This project utilizes [Yarn](https://yarnpkg.com). No other package manager is supported for this project.
To install dependencies for this project, open a command line interface at the directory of the cloned repository, and run:
```sh
yarn
```

This will create a `node_modules` directory in that of your project and add the packages there.

### Development
To setup a development server at `localhost:3000`, run
```sh
yarn dev
```

## Deployment
On push to the `master` branch, a GitHub Action will automatically deploy the commit into production. 
