**Read in another language: [Ukrainian](README.ua.md).**

# Web application "CamperRent"

This repository contains a web application for a company that provides campervan services in Ukraine
rent

## Table of contents

- [Project overview](#project-overview)
- [Technologies used](#technologies-used)
- [Installation](#instalattion)
- [Configuration](#configuration)
- [Server Commands](#server-commands)

## Project Overview

- Home page with a general description of the services provided by the company.
- A page containing a catalog of campers of various configurations, which the user can filter by
  location, equipment and type.
- a page with ads that have been added to favorites by the user.

## Technologies Used

Work done on Vite + React + Redux:

- redux-persist / redux-toolkit / react-hook-form / axios

Stylization:

- styled-components

Backend:

- https://mockapi.io/

## Installation

1. Clone this repository to your local computer.
2. Open the terminal and navigate to the root folder of the project.
3. Run the command `npm install` to install project dependencies.

## Configuration

1. Create a .env file in the project's root folder, based on the .env.example file.
2. Specify the necessary environment variables in this file.

## Server Commands

**npm:**

- `npm run build` — Start the server in production mode.
- `npm run dev` — Start the server in development mode.
- `npm run lint` — Run code linting using eslint. Perform this before each PR and fix all linting
  errors.
