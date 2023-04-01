# Instructions to run URL Keyword Scraper

## Installations and versions

You will need Node.js installed to run this application. It is recommended to install Node via a Node Version Manager of your choice. This application was developed using Node version 16.

With Node installed, run the install command in both the `/api` and the `/client` directories. This will install all additional libraries.

```
npm install
```

## Running the API

In the `/api` directory, run

```
npm start
```

This will start the server running on port 3080.

## Running the UI

In the `/client` directory, run

```
npm start
```

This will run the React app in development mode at `http://localhost:3000/`. More information about testing and building the UI for production can be found in `/client/README.md`.

Once both API and UI are running, the app is ready for use.
