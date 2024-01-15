# Development

## Prerequisites

- nvm
  - `brew install nvm` (MacOS)
  - on windows? I dunno... just check your node version I guess, see `.nvmrc`

## Setup

Set the correct Node version using nvm:

    nvm use

Install dependencies:

    npm i

And then start the local server by running:

    npm run dev

## Preview production

Build the project:

    npm run build

Start:

    npm run preview

## Run on mobile device

Navigate to the IP printed under Network when running `npm run dev` on your mobile device.

# Notes

## Decisions

- Checking Network connection
  - In the requirements it says "It has to work on the latest
    versions of Chrome", therefor I'm not having some fallback mechanism for other browsers or older versions of Chrome.
- MUI
  - To save a lot of time

## If no time constraints

- Delayed loading
  - To avoid loading-flickers, I'd like to have implemented a hook that helps loading elements decide whether to display or not. Something like `const showLoading = useDelayedLoading(isLoading)`.
- Drawer component (keep it simple dummy)
  - When I visualized the idea in my head I'd thought it could nice thing to have. But in retrospect I should just have kept it simple, if I'd do it again I'd just have `<DetailView />` as a regular route.
- Slow network
  - If slow network is detected, we should probably not be loading images
- Display more details about a show (appending more embedded items in the request)
- Enable search to not only accept show names, but maybe people
- Show dates and time based on browser locale?
- react-router-dom errorElements for LandingPage and DetailsPage
