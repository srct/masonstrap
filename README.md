# Masonstrap (GMU bootstrap theme) [![build status](https://git.gmu.edu/srct/masonstrap/badges/master/build.svg)](https://git.gmu.edu/srct/masonstrap/commits/master)

A project of [GMU SRCT](http://srct.gmu.edu).

Masonstrap is a theme for bootstrap customized with GMU brand colors and
elements. It aims to easily provide any web project with Mason branding.

# Adding Masonstrap to your project

This repo contains all of the necessary components to build and modify masonstrap
on your local machine. If you'd like just `masonstrap.min.css` head over to our
[pipelines page](https://git.gmu.edu/srct/masonstrap/pipelines) and download the
latest build of the css.

Additionally this link should grab you the latest css build:

[https://git.gmu.edu/srct/masonstrap/builds/artifacts/master/download?job=build_css]()

Masonstrap bundles bootstrap 3.7 and normalize.css for you.


# Building Masonstrap

If you would like to make changes to values or behaviors in Masonstrap you will
need to do some quick setup.

1. Ensure node.js is installed:

    On Ubuntu: 
        
        sudo apt update
        sudo apt install nodejs
        sudo apt install npm

    On macOS: 
    
    1. make sure you have [Homebrew](http://brew.sh)
    2. `brew install node`

    On Windows, download it [here](https://nodejs.org/en/download/).

2. You will also need Sass which is distributed as a ruby gem:

    On Ubuntu:

        sudo apt update
        sudo apt install ruby
        sudo gem install sass

3. In the root directory of this project run:

        npm install
        bower install

4. Finally, run:

        grunt build

    to build the css files (`masonstrap.css` and `masonstrap.min.css`) in the `masonstrap/` directory.

# Local development

If you would like to run the demo site on your local machine run:

    grunt

This will spin up a local server at [127.0.0.1:3000]().

Any changes made to the `.scss` or `.html` files will trigger a rebuild of the css and livereload of the site. 

## Making changes to Masonstrap

Masonstrap consists of two Sass files. `_variables.scss`, which is included by
default in Bootstrap, allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables).
`_masonstrap.scss` introduces more extensive structural changes.
