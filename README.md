# Digital Guides
> https://guides.service.gov.au/

> We aim to provide clear, consistent and compelling guidance which will inspire teams and help support them with how to design and deliver great digital services.

### Partial (layout) documentation

https://govau.github.io/service-manual/docs/

The Cuttlebelle auto-docs are deployed to the `gh-pages` branch.

To update the documentation after changing or adding a partial, change to the `gh-pages` branch and run `npm run docs`. Push it to deploy.

### Visual regression tests

https://github.com/govau/backstop-guides-tests

These can be optionally run before a production deployment to visually see the difference.

It's good for non-functional changes to ensure there is no visual regression.

## Staging environment

- **url**: [https://service-manual.apps.y.cld.gov.au/](https://service-manual.apps.y.cld.gov.au/)
- **branch**: `develop`
- **status**:  [![CircleCI](https://circleci.com/gh/govau/service-manual/tree/develop.svg?style=svg)](https://circleci.com/gh/govau/service-manual/tree/develop)

## Test environments (automatic provisioning)
- Branches deployed with the '-staging' suffix will be deployed to a new environment.
- `https://service-manual-[branchname-staging].apps.y.cld.gov.au/`
- example branch `test-staging` https://service-manual-test-staging.apps.y.cld.gov.au/


## Development

All pull requests should be compared against `develop`.

It's recommended you install `nvm` to manage your local node version.

**Change node version**

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

## Content

All content for the Service Manual is in the `/content` folder. We use [Cuttlebelle](https://github.com/dominikwilkowski/cuttlebelle) as static site generator
as to cleanly separate content from layout.

Images for content pages can be stored in the `/content/assets` folder.

## Metadata

Metadata can be stored on pages within the `index.yml` file. All fields except for `pagetitle` are optional.

**Fields**
- `pagetitle (string required)`
  - the page title
- `description (string optional)`
  - the meta description
- `keywords (string, comma delimited list, optional)`
  - for search engine
- `created_by (string optional)`
  - is displayed on pages using *intro_with_nav*
- `published_date (ISO date yyyy-mm-dd optional)`
  - is displayed on pages using *intro_with_nav*
  - make sure to form as a string e.g. "2018-05-12"
- `reviewed_date (ISO date yyyy-mm-dd optional)`
  - is displayed on pages using *intro_with_nav*
  - make sure to form as a string e.g. "2018-05-12"
- `boost (integer optional)`
  - influences the search engine results
- `hidden (boolean optional)`
  - hides the page if set to true
- `weight (integer optional)`
  - influences the ordering of menu items

## Search engine

Search is provided by the [Lunr](https://lunrjs.com/) javascript search engine.

Weight to search scoring is in the following descending order:

1. `keywords` (boost = 30)
2. `title` (boost = 10)
3. `description` (boost = 5)
4. `body` (no boost)

The content is indexed at build time, and can be influenced with the optional metadata fields `keywords` and `boost`.

**Boost**

Use small values, like 0.5 - 1 until your desired search result is attained.

**Keywords**

Keywords can be added in a comma delimited list.

**Federated pages**

External pages can be federated by adding data to `scripts/federate.js`

**Special combos**

Two word special word combinations can be added to improve results for specific queries. An example is the role 'delivery manager'. 

How to add a special combo:
1. Append the combination to the `function specialCombos(query)` in [`06-search-results.js`](https://github.com/govau/service-manual/blob/master/scripts/js/020-components/06-searchresults.js).
2. Add the two word term into the keywords of the page

**Search data static files**

Search data and indexes are stored in the following static files, which are deployed with the site:

1. [documents.json](https://guides.service.gov.au/documents.json) (the site document data)
2. [pathmap.json](https://guides.service.gov.au/pathmap.json) (lookup table for the SERP)
3. [search_index.json](https://guides.service.gov.au/search_index.json) (lunr's serialised index)

**Rebuilding the search index in development**

When experimenting with search tuning in development it is necessary to rebuild the [search index](https://lunrjs.com/guides/index_prebuilding.html) after changing content or metadata. This can be done hot in another terminal window with Cuttlebelle running.

```
npm run build:search
```
