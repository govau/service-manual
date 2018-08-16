# Digital Guides
> https://guides.service.gov.au/

> We aim to provide a single, clear, consistent and compelling service manual which will inspire teams and help support them with how to design and deliver great services.

## Staging

- **url**: [https://service-manual.apps.y.cld.gov.au/](https://service-manual.apps.y.cld.gov.au/)
- **branch**: `develop`
- **status**:  [![CircleCI](https://circleci.com/gh/govau/service-manual/tree/develop.svg?style=svg)](https://circleci.com/gh/govau/service-manual/tree/develop)


## Development

❗️All pull requests should be compared against `develop`

**If using NVM**

```shell
nvm use
```

**Install dependencies**

```shell
npm install
```

**Build the static assets**

```shell
npm run build
```

**Start the development server**

```shell
npm run watch
```

## Rebuild the search indexes


```shell
npm run build:search
```


## Content

All content for the Service Manual is in the `/content` folder. We use [Cuttlebelle](https://github.com/dominikwilkowski/cuttlebelle) as static site generator
as to cleanly separate content from layout.

Images for content pages can be stored in the `/content/assets` folder.
