Your Solution Documentation
===========================

Note: The provided `docker-compose.yml` mounts your local dev folders and is not a full containerized experience. Be sure to install the `npm` packages before running `docker-compose up`.

## Pacakges
Added in `typescript` for type checking and making the JS experience more palpable.

Adds in `styled-components` as a css-in-js library to handle css and styles. Chosen due to more recent exposure to the library.


## Implementation

### Frontend

I opted to do custom components instead of a third party UI library since it is my preference.

The application itself seemed simple enough at the current situation to not warrant the need for any higher state management.

Tests were done in Jest and React Testing library. Tests were done at a component level on the shared components and at a page level on page components. 


### Backend

This is a fullstack challenge, though most of my experience is on the FE.

## TODO/Things to consider in the future

If the application was to go more global, we may need to consider internationalistation, especially in regards to currency. While it is unlikely we'll need currency conversion, displaying the currency in the local symbol (to the website's countries of operation of course) or displaying the absolute currency if only operating within certain countries (ie. $AUD).


