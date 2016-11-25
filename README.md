# Masonstrap (GMU bootstrap theme) [![build status](https://git.gmu.edu/srct/masonstrap/badges/master/build.svg)](https://git.gmu.edu/srct/masonstrap/commits/master)

A project of [GMU SRCT](http://srct.gmu.edu).

Masonstrap is a custom theme for bootstrap customized with GMU brand colors and 
elements. It aims to easily provide any web project with Mason branding.

## Enabling Masonstrap for Your Project
<legend></legend>

This repo contains all of the necessary components to build and modify masonstrap
on your local machine. If you'd like just `masonstrap.min.css` head over to our
[pipelines page](https://git.gmu.edu/srct/masonstrap/pipelines) and download the 
latest build of the css.

Additionally this link should grab you the latest css build:
https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build_css

Masonstrap bundles bootstrap 3.0 and normalize.css for you.


## Building Masonstrap
<legend></legend>

If you would like to make changes to values or behaviors in Masonstrap you will 
need to do some quick setup.

1. Ensure node.js is installed:

    On Ubuntu: `$ sudo apt-get install npm`
    
    On macOS, make sure you have [Homebrew](http://brew.sh) then `$ brew install node`
    
    On Windows, download it [here](https://nodejs.org/en/download/).

2. In the root directory of this project run: 

    `$ npm install`

3. You will also need to have Grunt installed globally on your system: 

    `$ npm install -g grunt-cli`

4. Finally, run:

    `$ grunt swatch:masonstrap` to have masonstrap.css and masonstrap.min.css built.
    
### Stylesheet test webpage

Run:

`grunt`

to spin up a local server at [http://0.0.0.0:3000](http://0.0.0.0:3000) that 
will host a test webpage displaying all of the masonstrap elements styled with 
your locally built css files.

## Making changes to Masonstrap
    
After that, you are free to make whatever changes you like to the css files in masonstrap/
and the css will be updated accordingly when `grunt swatch:masonstrap` is run. Additionally,
`grunt watch` can be run to have grunt watch masonstrap/ for any changes and auto-build
masonstrap.

Masonstrap consists of two LESS files. `variables.less`, which is included by default 
in Bootstrap, allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables). 
`bootswatch.less` introduces more extensive structural changes.

These files are also available in SASS.


Icon
------
website by Stock Image Folio from the Noun Project
