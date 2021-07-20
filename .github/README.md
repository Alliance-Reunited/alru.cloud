<h1 align="center">alru.ga</h1>
<h3 align="center">The Alliance Reunited website.</h3>
<br />

### Installing Dependencies
This project uses [Yarn](https://yarnpkg.com). It is advised not to mix package managers as this can result in inconsistent lockfiles across contributors.

To install dependencies for this project, open a command line interface at the directory of your project, and run:
```sh
yarn
```

This will create a `node_modules` directory in that of your project and add the packages there.

### Running the Project
To setup a development server at `localhost:3000`, run
```sh
yarn dev
```

To build for production, run
```sh
yarn build
```

**NOTE:** This optimizes assets, takes time, and is not suitable for development. There is a sample NGINX configuration provided in the root directory of the project for this.
