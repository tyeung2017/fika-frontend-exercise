### Setup

To start
`yarn`
`yarn start`

### Assumptions

- I am assuming the app should not show any of the contents if either of the api call fails
- Hence the architecture is for initiating both api calls at the same time with Promise.all, for a more efficient fetching process

### Extended goals

- More proper styling, currently it is not styled at all, no responsive design, minimal accessibility to satisfy the linter
- better error handling as commented in the code, since there is no requirement for that now
- cancellation flow for ajax request, currently there is none as it is not required
