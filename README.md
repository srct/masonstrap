# Masonstrap 4

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

[https://git.gmu.edu/srct/masonstrap/-/jobs/artifacts/master/download?job=build](https://git.gmu.edu/srct/masonstrap/-/jobs/artifacts/master/download?job=build)

Included is the minified CSS for masonstrap, as well as other required static
files such as JS dependencies and fonts.

In lieu of serving the files yourself, you can utilize Gitlab Pages as a CDN:

```html
<link href="https://srct.gmu.io/masonstrap/css/masonstrap.min.css" rel="stylesheet">
<script src="https://srct.gmu.io/masonstrap/js/masonstrap.min.js"></script>
```

Note: Use at your own risk. :)

## Building Masonstrap yourself

1. Ensure `node.js` is installed:

    https://nodejs.org/download/release/latest/

2. Install dependencies with Yarn:

        sudo npm install -g yarn
        yarn

3. Install Gulp, the build system that we use:

        sudo npm install -g gulp-cli

4. Build Masonstrap

        gulp build

## Local development

You can spin up a development server with:

    gulp

Head to [127.0.0.1:8000](127.0.0.1:8000) to view!

Any changes made in `src/` are automatically applied to the dev server. DO NOT
EDIT IN `build/`, changes WILL NOT be committed.
