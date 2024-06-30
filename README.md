# Discogs Search

This is a simple app that allows you to search for artists on Discogs and view their releases. This project uses the [Discogs API](https://www.discogs.com/developers) to fetch data.

## Prerequisites

-   [node.js](https://nodejs.org/en/)
-   [Discogs API key](https://www.discogs.com/developers)

## Installation

```sh
npm install
```

Create a `.env.local` file in the root directory and add your Discogs API key:

```sh
DISCOGS_API_KEY=your_api_key
```

## Usage

Development server:

```sh
npm run dev
```

Production build:

```sh
npm run build
npm run start
```
