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

## Metadata

Metadata can be stored on pages within the `index.yml` file.

**Fields**
- `pagetitle (string required)`
  - the page title
- `description (string optional)`
  - the meta description
- `keywords (string, comma delimited list, optional)`
  - for search engine
- `created_by (string optional)`
- `published_date (ISO date yyyy-mm-dd optional)`
- `reviewed_date (ISO date yyyy-mm-dd optional)`
- `boost (integer optional)`
  - influences the search engine results
- `hidden (boolean optional)`
  - hides the page if set to true
- `weight (integer optional)`
  - influences the ordering of menu items

## Search engine

Search is provided by the [Lunr](https://lunrjs.com/) javascript search engine.

Priority to search score is ordered by matches to:
1. keywords
2. title
3. description
4. page body

The content is indexed at build time, and can be influenced with the optional metadata fields `keywords` and `boost`.

When experimenting with search tuning in development it is necessary to rebuild the search index after changing content or metadata.

**Boost**

Use small values, like 0.5 - 1 until your desired search result is attained.

**Keywords**

Keywords can be added in a comma delimited list.

**Federated pages**

External pages can be federated by adding data to `scripts/federate.js`

**Rebuilding the search index in development**

```
npm run build:search
```
