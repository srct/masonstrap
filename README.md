# Masonstrap (GMU bootstrap theme) [![build status](https://git.gmu.edu/srct/masonstrap/badges/master/build.svg)](https://git.gmu.edu/srct/masonstrap/commits/master)

A project of [GMU SRCT](http://srct.gmu.edu).

Masonstrap is a theme for bootstrap customized with GMU brand colors and
elements. It aims to easily provide any web project with Mason branding.

## Adding Masonstrap to your project

This repo contains all of the necessary components to build and modify masonstrap
on your local machine. If you'd like just `masonstrap.min.css` head over to our
[pipelines page](https://git.gmu.edu/srct/masonstrap/pipelines) and download the
latest build of the css.

Additionally this link should grab you the latest css build:

[https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build_css](https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build_css)

## Building Masonstrap

If you would like to make changes to values or behaviors in Masonstrap you will
need to do some quick setup.

1. Ensure `node.js` is installed:

    https://nodejs.org/download/release/latest/

2. Install dependencies with Yarn:

        sudo npm install -g yarn
        yarn

3. Build the stylesheets:

        npm run build-masonstrap

    `masonstrap.css`, `masonstrap.min.css`, and a source map for masonstrap will be output to `./masonstrap/`.
