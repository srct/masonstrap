# Masonstrap 4 (Beta 1)

[![build status](https://git.gmu.edu/srct/masonstrap/badges/master/build.svg)](https://git.gmu.edu/srct/masonstrap/commits/master) [![Gitlab license](https://img.shields.io/badge/license-MIT-blue.svg)](https://git.gmu.edu/srct/masonstrap/raw/master/LICENSE)

A project of [GMU SRCT](http://srct.gmu.edu).

Masonstrap is a theme for bootstrap customized with GMU brand colors and
elements. It aims to easily provide any web project with Mason branding. This
repo contains all of the necessary components to build and modify masonstrap
on your local machine.

You can find information about how to use bootstrap in their official documentation:

[https://getbootstrap.com/](https://getbootstrap.com/)

## Adding Masonstrap to your project

You can download the latest version of Masonstrap at the following URL:

[https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build](https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build)

Included is the minified CSS for masonstrap, as well as other required static
files such as JS dependencies and fonts.

## Building Masonstrap yourself

1. Ensure `node.js` is installed:

    https://nodejs.org/download/release/latest/

2. Install dependencies with Yarn:

        sudo npm install -g yarn
        yarn

3. Build the stylesheets:

        npm run build-masonstrap

    Head to `./public/assets/css` to find built masonstrap css files.

## Local development

You can dev on masonstrap either in Docker or on your local machine, whichever
you prefer.

### Docker

Assuming you have Docker and Docker Compose installed:

    docker-compose up

Will run a process to rebuild masonstrap on any changes and spin up a dev server
at [127.0.0.1:8000](http://127.0.0.1:8000)

### Manual setup

Spin up a process to watch for changes and rebuild masonstrap on the fly:

    npm start

Spin up a local web server to view the demo site:

    npm run http

Head to [127.0.0.1:8000](http://127.0.0.1:8000) to see the demo site!