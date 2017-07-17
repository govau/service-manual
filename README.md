# Service Manual

> We aim to provide a single, clear, consistent and compelling service manual which will inspire teams and help support them with how to design and deliver great services.


<!-- ## Production

- **url**: [https://service-manual.apps.platform.digital.gov.au/](https://service-manual.apps.platform.digital.gov.au/)
- **branch**: `master`
- **status**:  [![CircleCI](https://circleci.com/gh/govau/service-manual/tree/master.svg?style=svg)](https://circleci.com/gh/govau/service-manual/tree/master) -->

## Staging

- **url**: [https://service-manual.apps.staging.digital.gov.au/](https://service-manual.apps.staging.digital.gov.au/)
- **branch**: `develop`
- **status**:  [![CircleCI](https://circleci.com/gh/govau/service-manual/tree/develop.svg?style=svg)](https://circleci.com/gh/govau/service-manual/tree/develop)


## Development

❗️All pull requests should be compared against `develop`

**Install dependencies**

```shell
yarn
```

**Build the static assets**

```shell
yarn build
```

**Start the development server**

```shell
yarn watch
```


## Content

All content for the Service Manual is in the `/content` folder. We use [Cuttlebelle](https://github.com/dominikwilkowski/cuttlebelle) as static site generator
as to cleanly separate content from layout.

Images for content pages can be stored in the `/content/assets` folder.
