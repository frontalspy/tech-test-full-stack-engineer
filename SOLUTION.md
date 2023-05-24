Your Solution Documentation
===========================

Note: The provided `docker-compose.yml` mounts your local dev folders and is not a full containerized experience. Be sure to install the `npm` packages before running `docker-compose up`.

Also, I was having some issues getting docker to expose its ports correctly and in which the #server# was unable to speak to the mysql server, resulting in the following error:

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

So you may need to start the server manually with `npm start`.

## Pacakges
Added in `typescript` for type checking and making the JS experience more palpable.

Adds in `styled-components` as a css-in-js library to handle css and styles. Chosen due to more recent exposure to the library.

Added in `camelize-ts` to handle the conversion of snake_case to camelCase, the latter of which is preferred in javascript.


## Implementation

### Frontend

I opted to do custom components instead of a third party UI library since it is my preference.

The application itself seemed simple enough at the current situation to not warrant the need for any higher state management.

Tests were done in Jest and React Testing library. Tests were done at a component level on the shared components and at a page level on page components. 


### Backend

This is a fullstack challenge, though most of my experience is on the FE. I have implemented a simple solution on the node server with a database connection to the mysql service.

## TODO/Things to consider in the future

If the application was to go more global, we may need to consider internationalistation, especially in regards to currency. While it is unlikely we'll need currency conversion, displaying the currency in the local symbol (to the website's countries of operation of course) or displaying the absolute currency if only operating within certain countries (ie. $AUD).

Currently, the way we update the leads is what the kids would call "jank". Its a simple implementation and I did not have the full time to go through a proper solution featuring side effects. If I had more time, I may have changed how the hook work or make the backend would return the entire new data array. Another possible solution would be to have the front end act on its own, moving the lead once a 2xx response has been recieved.

I would add some tests for the server and some additional tests for the ui. The UI has enough tests to cover the main success scenarios, but things like error handling would need to be added.

Error handling as a whole isn't amazing, just mostly `console.error`. In the future, we may implement error handling inthe form of popups, or just error statuses.

Performance might be a concern down the line, if users have hundreds of leads. We can introduce pagination as a means to tackle this. Adding a `pageId` to the backend and creating paginated components on the ui would handle this - or have it be lazy loaded in the ui.

Smaller things would be to increase accessibility, I have added a few accessible things in the components but not enough on the page. So more accessibility features and testing would be beneficial.

Security will be a concern on both the UI and backend. On the UI, if we allow for user input we may need to sanitze some of the data. Forunately, React does most of it for us. Otherwise, other security would relate to authentication and encoding URIs. On the backend, we 100% need to santize user input data as well as santizing exported data. When handling database queries and connections, we need to ensure that variables we're using are escapped and cannot manually escape our queries.

One minor thing, would be just bumping the version of everything. Instead of using CRA, I would use my (ts-boilerplate)[https://github.com/frontalspy/ts-react-boilerplate]. I stuck with CRA since it was already set up with docker correctly, and my boilerplate requires platform specific packages.
