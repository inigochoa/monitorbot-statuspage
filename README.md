# Monitorbot statuspage

Status page for [Monitorbot]. Real-time updates for the status of your systems.

![Example 1](/img/example-1.png)
![Example 2](/img/example-2.png)

> **Note:** the status page only works with the firebase vertsion of Monitorbot.

## Getting started

These instructions will give you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
deploying the project to a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push.

- Node.js
- yarn

### Installing

A step by step series of examples that tell you how to get a development
environment running.

1. Install dependencies

    ```console
    yarn install
    ```

2. Fill the environment variables

3. Start the development environment

    ```console
    yarn serve
    ```

## Running the tests

### e2e

e2e tests ensure the site continues to work after changes are made. To run e2e
tests type:

```console
yarn cy:run
```

This generates a report on the console with the results of the tests.

If, on the other hand, you prefer to see the tests whitle they are runninf, you
can type:

```console
yarn cy:open
```

## Deployment

Generate a production ready static site by typing:

```console
yarn build
```

## Built With

- [Vue.js 2]
- [Tailwind CSS]
- [Firebase]
- [Cypress.io]
- [Contributor Covenant]

## Contributing

Please read [CONTRIBUTING.md] for details on our code of conduct, and process for
submitting pull requests to us.

## Versioning

We use [Semantic Versioning] for versioning. For the versions available, see the
[tags on this repository].

## Authors

See [AUTHORS.md] for a list of authors who participated on this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md] file for
details.

[Monitorbot]: https://github.com/inigochoa/monitorbot
[Vue.js 2]: https://vuejs.org/
[Tailwind CSS]: https://tailwindcss.com/
[Firebase]: https://firebase.google.com/
[Cypress.io]: https://www.cypress.io/
[Contributor Covenant]: https://www.contributor-covenant.org/
[CONTRIBUTING.md]: https://github.com/inigochoa/inigochoa.me/blob/main/CONTRIBUTING.md
[Semantic Versioning]: http://semver.org/
[tags on this repository]: https://github.com/inigochoa/monitorbot-statuspage/tags
[AUTHORS.md]: https://github.com/inigochoa/monitorbot-statuspage/blob/main/AUTHORS.md
[LICENSE.md]: https://github.com/inigochoa/monitorbot-statuspage/blob/main/LICENSE.md
